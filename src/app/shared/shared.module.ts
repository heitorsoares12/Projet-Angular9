import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadCrumComponent } from './components/bread-crum/bread-crum.component';



@NgModule({
  declarations: [BreadCrumComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    //shared modules
    CommonModule,
    ReactiveFormsModule,

    //shared components
    BreadCrumComponent
  ]
})
export class SharedModule { }
