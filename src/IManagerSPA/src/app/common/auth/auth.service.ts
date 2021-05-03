import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private _token: string;

    constructor() { }


    public setToken(token: string) {
        this._token = token;
    }

    public getToken(): string {
        return this._token;
    }

    public tokenExist(): boolean {
        return this._token?.length > 0;
    }

    public removeToken(): void {
        this._token = null;
    }

}
