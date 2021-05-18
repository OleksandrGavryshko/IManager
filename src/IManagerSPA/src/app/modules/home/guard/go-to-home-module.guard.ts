import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "src/app/common/auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GoToHomeModuleGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.tokenExist()) {
            this._router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    }
}