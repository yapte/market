import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort/sort.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SortComponent,
  ],
  exports: [
    SortComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    TriStateCheckboxModule,
  ]
})
export class SortModule { }
