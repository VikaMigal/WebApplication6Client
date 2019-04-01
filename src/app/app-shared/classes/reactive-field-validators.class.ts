import {Validators} from '@angular/forms';

export class ReactiveFieldValidators {

    constructor() {
    }


    loginValidators() {
        return [
            Validators.required,
        ];
    }

    passwordValidators() {
        return [
            Validators.required,
            Validators.minLength(8)];
    }
}
