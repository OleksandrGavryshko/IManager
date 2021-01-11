import {
  HttpErrorResponse,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { ReportProgressDto, ReportProgressService } from './report-progress.service';
import { mergeMap, tap } from 'rxjs/operators';

import { AlertifyService } from '../alertify/alertify.service';
import { ServiceBaseConfiguration } from './api.service-base-configuration';

@Injectable()
export class ServiceBase {
  constructor(
    private serviceBaseConfiguration: ServiceBaseConfiguration
    ) { }

  public transformOptions(options) {
    options.reportProgress = true;
    options.observe = 'events';
    return Promise.resolve(options);
  }

  public transformResult(
    url: string,
    response: any,
    processor: (response: any) => Observable<any>
  ): Observable<any> {
    const type: HttpEventType = response.type;
    switch (type) {
      case HttpEventType.User:
      case HttpEventType.Sent:
      case HttpEventType.ResponseHeader:
        break;

      case HttpEventType.UploadProgress:
      case HttpEventType.DownloadProgress:
        this.serviceBaseConfiguration.reportProgressService.newValue(
          new ReportProgressDto(response.loaded, response.total)
        );
        break;

      default:
        // if (response instanceof HttpErrorResponse) {
        // return readFile(response.error).pipe(map(value => {
        //   throw <IErrorInfo>JSON.parse(value);
        // }));
        // } else if (event instanceof HttpResponse) {
        //console.log('File is completely uploaded!');
        // }
        return processor(response);
    }
    return empty();
  }
}
