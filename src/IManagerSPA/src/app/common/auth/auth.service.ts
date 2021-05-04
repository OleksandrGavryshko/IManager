import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    // TODO: localstorrage ?
    // private _token: string;

    constructor() { }


    public setToken(token: string) {
        // this._token = token;
        localStorage.setItem('token', token);
    }

    public getToken(): string {
        return localStorage.getItem('token');
        // return this._token;
    }

    public tokenExist(): boolean {
        return localStorage.getItem('token')?.length > 0;
        // return this._token?.length > 0;
    }

    public removeToken(): void {
        localStorage.removeItem('token');
        // this._token = null;
    }

}
