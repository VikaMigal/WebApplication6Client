import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule} from '@angular/material';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {FieldInputModule} from '../../app-shared';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        LoginRoutingModule,
        FieldInputModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
