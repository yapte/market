import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-simple-form2-page',
  templateUrl: './simple-form2-page.component.html',
  styleUrls: ['./simple-form2-page.component.scss']
})
export class SimpleForm2PageComponent implements OnInit {
  form: FormGroup;
  isDescriptionVisible$: Observable<boolean>;

  get productArrayItems(): AbstractControl[] {
    return (this.form.get('products') as FormArray).controls;
  }
  // =
  get productArrayIndexes(): number[] {
    return (this.form.get('products') as FormArray).controls.map((_, index) => index);
  }

  constructor(private _fb: FormBuilder) { }

  private _generateProductFormFB(): FormGroup {
    return this._fb.group({
      name: [],
      price: [0, [Validators.email]],
    });
  }
  private _generateProductForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [Validators.max(23)],),
      price: new FormControl<number>(0),
    }, [],);
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>(null, [Validators.required]),
      isRequired: new FormControl<boolean>(false),

      customer: new FormGroup({
        name: new FormControl<string>(''),
        age: new FormControl<number>(null),
      }),

      products: new FormArray([
        this._generateProductForm(),
      ]),
    });

    this.form.valueChanges.subscribe(x => console.log(x));

    const descriptionControl: FormControl = this.form.get('description') as FormControl;
    this.isDescriptionVisible$ = this.form.get('isRequired').valueChanges
      .pipe(
        tap(value => {
          if (value) descriptionControl.enable();
          else descriptionControl.disable();
        })
      );
  }

  add() {
    (this.form.get('products') as FormArray)
      .push(this._generateProductForm());
  }

  submit() {
    console.log(this.form.value);
  }
}

// Domain Model - form generated
// - Adapter: Domain => DTO
// DTO
// DTO {FirstName: string, LastName: string, MiddleName: string}
// Domain {firstName: dto.FirstName, lastName: dto.LastName, middleName: dto.MiddleName, fullName: dto.LastName + ' ' + dto.FirstName.get(0) + '.'}
