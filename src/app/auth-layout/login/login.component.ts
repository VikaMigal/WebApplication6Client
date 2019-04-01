import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ReactiveFieldValidators, FormErrorHandlerClass, AuthService} from '../../app-shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../auth-shared.scss']
})
export class LoginComponent implements OnInit {
    formSignIn: FormGroup;
    pending: boolean;
    private reactiveFieldValidators: ReactiveFieldValidators;
    private formErrors = {login: '', password: ''};
    private errorHandler: FormErrorHandlerClass;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.errorHandler = new FormErrorHandlerClass(this.formErrors);
        this.reactiveFieldValidators = new ReactiveFieldValidators();
        this.buildForm();
    }

    get clentErrors() {
        return this.errorHandler.formErrors;
    }

    ngOnInit() {

    }

    private buildForm(): void {
        this.formSignIn = this.fb.group({
            login: ['', this.reactiveFieldValidators.loginValidators()],
            password: ['', this.reactiveFieldValidators.passwordValidators()]

        });
        this.formSignIn.valueChanges.subscribe(data => this.errorHandler.validateForm(this.formSignIn));
    }

    onSubmit() {
        this.pending = true;
        this.authService.loginUser(this.formSignIn.value).subscribe(data => {
            this.pending = false;
            this.router.navigate(['/']);
        }, error => {

            this.pending = false;
        });
    }
}
