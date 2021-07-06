import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request: HttpRequest<any>

        if (this._authService.tokenExist()) {
            request = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this._authService.getToken())
            });
        } else {
            request = req.clone();
        }

        return next.handle(request);
    }
}
