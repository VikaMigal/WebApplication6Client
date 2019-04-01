import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
    private readonly url = 'http://localhost:5000/api/';

    constructor(private http: HttpClient, private router: Router) {
    }

    private prepareOptions() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'JwtBearer' + sessionStorage.getItem('tokenKey')} );
        return {
            headers: headers,
            withCredentials: true
        };
    }

    get(url: string, baseUrl = this.url) {
        return this.http
            .get(baseUrl + url, this.prepareOptions())
            .map(response => response)
            .catch(error => this.catchHandler(error));
    }

    post(url: string, dataRaw: any, baseUrl = this.url) {
        const data = JSON.stringify(dataRaw);

        return this.http
            .post(baseUrl + url, data, this.prepareOptions())
            .map(response => response)
            .catch(error => this.catchHandler(error));
    }

    put(url: string, dataRaw: any, baseUrl = this.url) {
        const data = JSON.stringify(dataRaw);

        return this.http
            .put(baseUrl + url, data, this.prepareOptions())
            .map(response => response)
            .catch(error => this.catchHandler(error));
    }

    delete(url: string, baseUrl = this.url) {
        return this.http
            .delete(baseUrl + url, this.prepareOptions())
            .map(response => response)
            .catch(error => this.catchHandler(error));
    }

    private catchHandler(error: HttpErrorResponse) {
        if (!error) {
            return Observable.throw('Something went wrong');
        }
        if (error.status === 401) {
            this.router.navigateByUrl('auth/login');
        }
        return Observable.throw(error);
    }

}
