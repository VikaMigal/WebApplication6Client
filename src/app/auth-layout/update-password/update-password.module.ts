import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordComponent } from './update-password.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FieldInputModule} from '../../app-shared/components/field-input/field-input.module';
import {UpdatePasswordRoutingModule} from './update-password-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    UpdatePasswordRoutingModule,
    FieldInputModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [UpdatePasswordComponent]
})
export class UpdatePasswordModule { }
