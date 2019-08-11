import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpService} from './http.service';
import {AuthUser} from '../models';

@Injectable()
export class AuthService {

    public sendCodeRecoverPass = false;

    constructor(private http: HttpService) {
    }

    loginUser(userData: AuthUser) {
        return this.http.post('auth/login', userData).map(res => {
            // sessionStorage.setItem('tokenKey', res.tokenKey);
            return res;
        });
    }

    registerUser(userData: AuthUser) {
        return this.http.post('auth/register', userData).map(res => {
            // sessionStorage.setItem('tokenKey', res.tokenKey);
            return res;
        });
    }

    updatePassword(userData: AuthUser) {
        return this.http.put('auth/updatePassword', userData).map(res => {
            // sessionStorage.setItem('tokenKey', res.tokenKey);
            return res;
        });
    }
}
