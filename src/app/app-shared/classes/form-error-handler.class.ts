import {FormGroup, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

const validationMessages = {
    login: {
        required: 'Required field',
    },
    password: {
        required: 'Required field',
        minlength: 'Minimum 8 characters',
    }
};


export class FormErrorHandlerClass {
    formErrors;
    constructor(formErrors) {
        this.formErrors = formErrors;
    }

    validateForm(formGroup) {
        const form = formGroup;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                this.setError(control, field);
            }
        }
    }

    private setError(control, field) {
        if (control && control.dirty && !control.valid) {
            const messages = validationMessages[field];
            for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}
