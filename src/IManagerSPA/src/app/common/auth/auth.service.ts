import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public userIsLoggedIn: BehaviorSubject<boolean>;

    constructor() {
        this.userIsLoggedIn = new BehaviorSubject(false);
        const token = this.getToken();
        if (token && token.length > 0)
            this.userIsLoggedIn.next(true);
    }

    public setToken(token: string) {
        localStorage.setItem('token', token);
        this.userIsLoggedIn.next(true);
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public tokenExist(): boolean {
        const tokenExist = localStorage.getItem('token')?.length > 0;

        if (!tokenExist && this.userIsLoggedIn.value)
            this.userIsLoggedIn.next(false);

        return tokenExist;
    }

    public removeToken(): void {
        localStorage.removeItem('token');
        this.userIsLoggedIn.next(false);
    }

}
