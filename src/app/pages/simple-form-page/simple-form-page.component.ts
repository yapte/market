import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form-page',
  templateUrl: './simple-form-page.component.html',
  styleUrls: ['./simple-form-page.component.scss']
})
export class SimpleFormPageComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    isRequired: new FormControl<boolean>(true),
    products: new FormArray([
      this.generateProductForm(),
      this.generateProductForm(),
    ]),
  });

  get products(): AbstractControl[] {
    return (this.form.get('products') as FormArray).controls;
  }

  appendProduct(): void {
    (this.form.get('products') as FormArray).push(this.generateProductForm())
  }

  generateProductForm(): FormGroup {
    return new FormGroup({
      productName: new FormControl<string>('product name'),
      productQty: new FormControl<number>(12),
      productDescription: new FormControl<string>('product description'),
    })
  }

  submit() {
    console.log(this.form.value);
  }
}
