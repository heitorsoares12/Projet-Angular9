import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadCrumComponent } from './components/bread-crum/bread-crum.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [BreadCrumComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    //shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    //shared components
    BreadCrumComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
