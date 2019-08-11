import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from './register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {FieldInputModule} from '../../app-shared';


@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        RegisterRoutingModule,
        FieldInputModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {
}
