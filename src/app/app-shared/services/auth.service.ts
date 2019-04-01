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
        return this.http.post('authentication', userData).map(res => {
            sessionStorage.setItem('tokenKey', res.tokenKey);
            return res;
        });
    }

}
