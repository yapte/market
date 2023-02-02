import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, map, Observable, shareReplay, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-simple-form3-page',
  templateUrl: './simple-form3-page.component.html',
  styleUrls: ['./simple-form3-page.component.scss']
})
export class SimpleForm3PageComponent implements OnInit {
  form: FormGroup;
  isRemoveBtnVisible$: Observable<boolean>;
  isDescriptionRequired$: Observable<boolean>;
  sum$: Observable<number>;

  // priceControl = new FormControl();
  // qtyControl = new FormControl();

  get productFormGroups(): AbstractControl[] {
    return (this.form.get('products') as FormArray).controls;
  }

  private _generateProductForm(): FormGroup {
    return new FormGroup({ // [formGroupName]
      name: new FormControl<string>(null), // [formControlName]
      price: new FormControl<number>(20),
      qty: new FormControl<number>(1),
    });
  }

  ngOnInit() {
    this.form = new FormGroup({ // Parent
      name: new FormControl<string>(null), // [formControlName]
      description: new FormControl<string>(null, Validators.required),
      isRequired: new FormControl<boolean>(false),

      customer: new FormGroup({ // child [formGroupName]
        name: new FormControl<string>(null),
        age: new FormControl<number>(null),
      }),

      products: new FormArray([ // [formArrayName]
        this._generateProductForm(),
      ]),
    });

    this.form.valueChanges.subscribe(value => console.log(value));

    this.isRemoveBtnVisible$ = this.form.get('products').valueChanges
      .pipe(
        map((products: any[]) => products.length > 1),
        distinctUntilChanged(),
        shareReplay(1),
      );

    this.sum$ = this.form.get('products').valueChanges
      .pipe(
        startWith(this.form.get('products').value),
        map((products: any[]) => products.reduce((acc, p) => acc + p.price * p.qty, 0)),
        distinctUntilChanged(),
        // shareReplay(1),
      );

    const isRequiredControl: FormControl = this.form.get('isRequired') as FormControl;
    this.isDescriptionRequired$ = isRequiredControl.valueChanges
      .pipe(
        startWith(isRequiredControl.value),
        tap(
          isRequired => {
            const descriptionControl: FormControl = this.form.get('description') as FormControl;
            if (isRequired) {
              descriptionControl.enable();
            } else {
              descriptionControl.disable();
            }
          }
        )
      );
  }

  append() {
    (this.form.get('products') as FormArray).push(this._generateProductForm())
  }

  removeAt(index: number) {
    (this.form.get('products') as FormArray).removeAt(index);
  }

  submit() {
    console.log(this.form.value); // Domain
    // domain = this.form.value
    // DTO = _adapter.adaptToDto(domain)
    // _service.send(DTO)
  }
}
