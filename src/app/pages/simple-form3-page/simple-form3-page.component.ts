import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form3-page',
  templateUrl: './simple-form3-page.component.html',
  styleUrls: ['./simple-form3-page.component.scss']
})
export class SimpleForm3PageComponent implements OnInit {
  form: FormGroup;

  get productFormGroups(): AbstractControl[] {
    return (this.form.get('products') as FormArray).controls;
  }

  private _generateProductForm(): FormGroup {
    return new FormGroup({ // [formGroupName]
      name: new FormControl<string>(null), // [formControlName]
      price: new FormControl<number>(null),
      qty: new FormControl<number>(null),
    });
  }

  ngOnInit() {
    this.form = new FormGroup({ // Parent
      name: new FormControl<string>(null), // [formControlName]
      description: new FormControl<string>(null),

      customer: new FormGroup({ // child [formGroupName]
        name: new FormControl<string>(null),
        age: new FormControl<number>(null),
      }),

      products: new FormArray([ // [formArrayName]
        this._generateProductForm(),
      ]),
    });

    this.form.valueChanges.subscribe(value => console.log(value))
  }

  append() {
    (this.form.get('products') as FormArray).push(this._generateProductForm())
  }

  removeAt(index: number) {
    (this.form.get('products') as FormArray).removeAt(index);
  }
}
