import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToThaiDatePipe } from './to-thai-date.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ToThaiDatePipe],
  exports: [
    ToThaiDatePipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HelperModule { }
