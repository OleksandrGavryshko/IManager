/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IAuthClient {
    signUp(command: CreateUserCommand): Observable<AppResponseOfBoolean>;
    signIn(command: SignInCommand): Observable<AppResponseOfSignInCommandResponse>;
    signOut(command: SignOutCommand): Observable<AppResponseOfSignOutCommandResponse>;
}

@Injectable()
export class AuthClient implements IAuthClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    signUp(command: CreateUserCommand): Observable<AppResponseOfBoolean> {
        let url_ = this.baseUrl + "/api/Auth/SignUp";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSignUp(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSignUp(<any>response_);
                } catch (e) {
                    return <Observable<AppResponseOfBoolean>><any>_observableThrow(e);
                }
            } else
                return <Observable<AppResponseOfBoolean>><any>_observableThrow(response_);
        }));
    }

    protected processSignUp(response: HttpResponseBase): Observable<AppResponseOfBoolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AppResponseOfBoolean.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AppResponseOfBoolean>(<any>null);
    }

    signIn(command: SignInCommand): Observable<AppResponseOfSignInCommandResponse> {
        let url_ = this.baseUrl + "/api/Auth/SignIn";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSignIn(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSignIn(<any>response_);
                } catch (e) {
                    return <Observable<AppResponseOfSignInCommandResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<AppResponseOfSignInCommandResponse>><any>_observableThrow(response_);
        }));
    }

    protected processSignIn(response: HttpResponseBase): Observable<AppResponseOfSignInCommandResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AppResponseOfSignInCommandResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AppResponseOfSignInCommandResponse>(<any>null);
    }

    signOut(command: SignOutCommand): Observable<AppResponseOfSignOutCommandResponse> {
        let url_ = this.baseUrl + "/api/Auth/SignOut";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSignOut(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSignOut(<any>response_);
                } catch (e) {
                    return <Observable<AppResponseOfSignOutCommandResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<AppResponseOfSignOutCommandResponse>><any>_observableThrow(response_);
        }));
    }

    protected processSignOut(response: HttpResponseBase): Observable<AppResponseOfSignOutCommandResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AppResponseOfSignOutCommandResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AppResponseOfSignOutCommandResponse>(<any>null);
    }
}

export interface ITestClient {
    getValue(): Observable<string>;
    getValueAuth(): Observable<string>;
}

@Injectable()
export class TestClient implements ITestClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getValue(): Observable<string> {
        let url_ = this.baseUrl + "/api/Test/GetValue";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetValue(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetValue(<any>response_);
                } catch (e) {
                    return <Observable<string>><any>_observableThrow(e);
                }
            } else
                return <Observable<string>><any>_observableThrow(response_);
        }));
    }

    protected processGetValue(response: HttpResponseBase): Observable<string> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<string>(<any>null);
    }

    getValueAuth(): Observable<string> {
        let url_ = this.baseUrl + "/api/Test/GetValueAuth";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetValueAuth(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetValueAuth(<any>response_);
                } catch (e) {
                    return <Observable<string>><any>_observableThrow(e);
                }
            } else
                return <Observable<string>><any>_observableThrow(response_);
        }));
    }

    protected processGetValueAuth(response: HttpResponseBase): Observable<string> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<string>(<any>null);
    }
}

export class AppResponseOfBoolean implements IAppResponseOfBoolean {
    result?: boolean;
    errors?: string[] | undefined;

    constructor(data?: IAppResponseOfBoolean) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.result = _data["result"];
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(item);
            }
        }
    }

    static fromJS(data: any): AppResponseOfBoolean {
        data = typeof data === 'object' ? data : {};
        let result = new AppResponseOfBoolean();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["result"] = this.result;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item);
        }
        return data; 
    }
}

export interface IAppResponseOfBoolean {
    result?: boolean;
    errors?: string[] | undefined;
}

export class CreateUserCommand implements ICreateUserCommand {
    email?: string | undefined;
    password?: string | undefined;

    constructor(data?: ICreateUserCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): CreateUserCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateUserCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["password"] = this.password;
        return data; 
    }
}

export interface ICreateUserCommand {
    email?: string | undefined;
    password?: string | undefined;
}

export class AppResponseOfSignInCommandResponse implements IAppResponseOfSignInCommandResponse {
    result?: SignInCommandResponse | undefined;
    errors?: string[] | undefined;

    constructor(data?: IAppResponseOfSignInCommandResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.result = _data["result"] ? SignInCommandResponse.fromJS(_data["result"]) : <any>undefined;
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(item);
            }
        }
    }

    static fromJS(data: any): AppResponseOfSignInCommandResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AppResponseOfSignInCommandResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["result"] = this.result ? this.result.toJSON() : <any>undefined;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item);
        }
        return data; 
    }
}

export interface IAppResponseOfSignInCommandResponse {
    result?: SignInCommandResponse | undefined;
    errors?: string[] | undefined;
}

export class SignInCommandResponse implements ISignInCommandResponse {
    user?: ApplicationUser | undefined;
    token?: string | undefined;

    constructor(data?: ISignInCommandResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.user = _data["user"] ? ApplicationUser.fromJS(_data["user"]) : <any>undefined;
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): SignInCommandResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SignInCommandResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["token"] = this.token;
        return data; 
    }
}

export interface ISignInCommandResponse {
    user?: ApplicationUser | undefined;
    token?: string | undefined;
}

export class IdentityUserOfGuid implements IIdentityUserOfGuid {
    id?: string;
    userName?: string | undefined;
    normalizedUserName?: string | undefined;
    email?: string | undefined;
    normalizedEmail?: string | undefined;
    emailConfirmed?: boolean;
    passwordHash?: string | undefined;
    securityStamp?: string | undefined;
    concurrencyStamp?: string | undefined;
    phoneNumber?: string | undefined;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: Date | undefined;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;

    constructor(data?: IIdentityUserOfGuid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.userName = _data["userName"];
            this.normalizedUserName = _data["normalizedUserName"];
            this.email = _data["email"];
            this.normalizedEmail = _data["normalizedEmail"];
            this.emailConfirmed = _data["emailConfirmed"];
            this.passwordHash = _data["passwordHash"];
            this.securityStamp = _data["securityStamp"];
            this.concurrencyStamp = _data["concurrencyStamp"];
            this.phoneNumber = _data["phoneNumber"];
            this.phoneNumberConfirmed = _data["phoneNumberConfirmed"];
            this.twoFactorEnabled = _data["twoFactorEnabled"];
            this.lockoutEnd = _data["lockoutEnd"] ? new Date(_data["lockoutEnd"].toString()) : <any>undefined;
            this.lockoutEnabled = _data["lockoutEnabled"];
            this.accessFailedCount = _data["accessFailedCount"];
        }
    }

    static fromJS(data: any): IdentityUserOfGuid {
        data = typeof data === 'object' ? data : {};
        let result = new IdentityUserOfGuid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["normalizedUserName"] = this.normalizedUserName;
        data["email"] = this.email;
        data["normalizedEmail"] = this.normalizedEmail;
        data["emailConfirmed"] = this.emailConfirmed;
        data["passwordHash"] = this.passwordHash;
        data["securityStamp"] = this.securityStamp;
        data["concurrencyStamp"] = this.concurrencyStamp;
        data["phoneNumber"] = this.phoneNumber;
        data["phoneNumberConfirmed"] = this.phoneNumberConfirmed;
        data["twoFactorEnabled"] = this.twoFactorEnabled;
        data["lockoutEnd"] = this.lockoutEnd ? this.lockoutEnd.toISOString() : <any>undefined;
        data["lockoutEnabled"] = this.lockoutEnabled;
        data["accessFailedCount"] = this.accessFailedCount;
        return data; 
    }
}

export interface IIdentityUserOfGuid {
    id?: string;
    userName?: string | undefined;
    normalizedUserName?: string | undefined;
    email?: string | undefined;
    normalizedEmail?: string | undefined;
    emailConfirmed?: boolean;
    passwordHash?: string | undefined;
    securityStamp?: string | undefined;
    concurrencyStamp?: string | undefined;
    phoneNumber?: string | undefined;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: Date | undefined;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
}

export class ApplicationUser extends IdentityUserOfGuid implements IApplicationUser {

    constructor(data?: IApplicationUser) {
        super(data);
    }

    init(_data?: any) {
        super.init(_data);
    }

    static fromJS(data: any): ApplicationUser {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicationUser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}

export interface IApplicationUser extends IIdentityUserOfGuid {
}

export class SignInCommand implements ISignInCommand {
    email?: string | undefined;
    password?: string | undefined;

    constructor(data?: ISignInCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): SignInCommand {
        data = typeof data === 'object' ? data : {};
        let result = new SignInCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["password"] = this.password;
        return data; 
    }
}

export interface ISignInCommand {
    email?: string | undefined;
    password?: string | undefined;
}

export class AppResponseOfSignOutCommandResponse implements IAppResponseOfSignOutCommandResponse {
    result?: SignOutCommandResponse | undefined;
    errors?: string[] | undefined;

    constructor(data?: IAppResponseOfSignOutCommandResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.result = _data["result"] ? SignOutCommandResponse.fromJS(_data["result"]) : <any>undefined;
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(item);
            }
        }
    }

    static fromJS(data: any): AppResponseOfSignOutCommandResponse {
        data = typeof data === 'object' ? data : {};
        let result = new AppResponseOfSignOutCommandResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["result"] = this.result ? this.result.toJSON() : <any>undefined;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item);
        }
        return data; 
    }
}

export interface IAppResponseOfSignOutCommandResponse {
    result?: SignOutCommandResponse | undefined;
    errors?: string[] | undefined;
}

export class SignOutCommandResponse implements ISignOutCommandResponse {

    constructor(data?: ISignOutCommandResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): SignOutCommandResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SignOutCommandResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data; 
    }
}

export interface ISignOutCommandResponse {
}

export class SignOutCommand implements ISignOutCommand {

    constructor(data?: ISignOutCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): SignOutCommand {
        data = typeof data === 'object' ? data : {};
        let result = new SignOutCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data; 
    }
}

export interface ISignOutCommand {
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}