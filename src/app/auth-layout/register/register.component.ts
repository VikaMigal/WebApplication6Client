import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReactiveFieldValidators} from '../../app-shared/classes/reactive-field-validators.class';
import {FormErrorHandlerClass} from '../../app-shared/classes/form-error-handler.class';
import {AuthService} from '../../app-shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth-shared.scss']
})
export class RegisterComponent implements OnInit {
    formSignIn: FormGroup;
    pending: boolean;
    private reactiveFieldValidators: ReactiveFieldValidators;
    private formErrors = {login: '', password: '', email: '', phoneNumber: ''};
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
            login: [''],
            password: [''],
            email: [''],
            phoneNumber: ['']

        });
        this.formSignIn.valueChanges.subscribe(data => this.errorHandler.validateForm(this.formSignIn));
    }

    onSubmit() {
        this.pending = true;
        this.authService.registerUser(this.formSignIn.value).subscribe(data => {
            this.pending = false;
            this.router.navigate(['/']);
        }, error => {

            this.pending = false;
        });
    }

}
