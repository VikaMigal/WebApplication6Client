import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReactiveFieldValidators} from '../../app-shared/classes/reactive-field-validators.class';
import {FormErrorHandlerClass} from '../../app-shared/classes/form-error-handler.class';
import {AuthService} from '../../app-shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss', '../auth-shared.scss']
})
export class UpdatePasswordComponent implements OnInit {

  formSignIn: FormGroup;
  pending: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {

  }

  private buildForm(): void {
    this.formSignIn = this.fb.group({
      login: [''],
      password: ['']

    });
  }

  onSubmit() {
    this.pending = true;
    this.authService.updatePassword(this.formSignIn.value).subscribe(data => {
      this.pending = false;
      this.router.navigate(['/']);
    }, error => {

      this.pending = false;
    });
  }


}
