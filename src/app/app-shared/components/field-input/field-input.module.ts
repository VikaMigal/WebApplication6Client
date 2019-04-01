import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {FieldInputComponent} from './field-input.component';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [FieldInputComponent],
    exports: [
        FieldInputComponent
    ]
})
export class FieldInputModule {
}
