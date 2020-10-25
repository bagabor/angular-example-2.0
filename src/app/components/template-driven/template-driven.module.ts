import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TemplateDrivenComponent } from './template-driven.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class TemplateDrivenFormModule { }