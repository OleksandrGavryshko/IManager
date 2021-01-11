import { ValidationFailure, ValidationResult } from '../api.services';

import { AlertifyService } from '../alertify/alertify.service';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ApiErrorHandler {

    constructor(
        private alertify: AlertifyService,
        private translateService: TranslateService
    ) { }

    /**
     * Shows error from a api response if exists. Returns true if errors exists or false if no.
     * @param response Api response typeof RequestResponseOf...
     */
    public errorsExistInResponse(response: any): boolean {
        if (!response) {
            this.alertify.error(this.translateService.instant('Services.ApiErrorHandler.ServerResponseIsEmpty'));
            return true;
        }

        const baseResponse = response as IBaseRequestResponse;

        if (!baseResponse.validationResult) return true;

        baseResponse.validationResult.errors.forEach(error => {
            const translatedMessage = this.replaceFormattedArgumentsInMessage(error);
            this.alertify.error(translatedMessage);
        });

        if (baseResponse.validationResult.isValid === false || baseResponse.validationResult.errors.length > 0) return true;
        else return false;
    }

    public replaceFormattedArgumentsInMessage(error: ValidationFailure): string {
        let translatedMessage = this.translateService.instant(error.errorMessage) as string;

        if (error.formattedMessageArguments && error.formattedMessageArguments.length > 0) {
            const variablesToReplace = translatedMessage.match(/\{\{(.*?)\}\}/g);

            if (variablesToReplace && variablesToReplace.length > 0) {
                for (let i = 0; i < variablesToReplace.length; i++) {
                    if (error.formattedMessageArguments[i] && error.formattedMessageArguments[i].errorMessage) {
                        translatedMessage = translatedMessage.replace(variablesToReplace[i], this.replaceFormattedArgumentsInMessage(error.formattedMessageArguments[i]));
                    } else {
                        translatedMessage = translatedMessage.replace(variablesToReplace[i], this.translateService.instant(error.formattedMessageArguments[i]));
                    }

                }
            }
        }

        return translatedMessage;
    }

}

interface IBaseRequestResponse {
    validationResult?: ValidationResult | undefined;
    result?: any | undefined;
}
