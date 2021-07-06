import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";

import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { NotifyService } from "src/app/services/notify.service";
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _notifyService: NotifyService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError(error => this.handleError(error))
        );
    }

    private  handleError(error: any): Observable<any> {

        let errorMessage = null;
        let handled: boolean = false;

        if (error?.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else if (error instanceof HttpErrorResponse) {
            errorMessage = `Error Status ${error.status}: ${error.error.error} - ${error.error.message}`;
            handled = this.handleServerSideError(error);
        }

        if (!handled) {
            if (errorMessage) {
                return throwError(errorMessage);
            } else {
                return throwError("Unexpected problem occurred");
            }
        } else {
            return throwError(errorMessage);
            // return of(error);
        }
    }

    private handleServerSideError(error: HttpErrorResponse): boolean {
        let handled: boolean = false;

        // TODO: check if 400 handler needed here?
        switch (error.status) {
            case 0:
                this.handle0Error(error);
            case 400:
                this.handle400Error(error);
                handled = true;
                break;
            case 401:
                this.handle401Error();
                handled = true;
                break;

            // case 403:
            //     this.routeMessageService.message = "Please login again.";
            //     this.authenticationService.logout();
            //     handled = true;
            //     break;
        }

        return handled;
    }

    private handle0Error(error: HttpErrorResponse): void {
        if (error?.message?.length > 0) {
            this._notifyService.error(error.message);
        }
    }

    private handle400Error(error: HttpErrorResponse): void {
        if (error.error instanceof Blob) {
            error.error.text().then(text => {
                console.log(text);
                this._notifyService.error(text);
            });
        }

    }

    private handle401Error(): void {
        this._authService.removeToken();
        this._router.navigateByUrl('/account/login');
    }


}
