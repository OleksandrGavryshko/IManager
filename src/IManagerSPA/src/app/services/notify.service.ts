import { SnotifyService, ToastDefaults } from 'ng-snotify';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private _sn: SnotifyService
  ) {
    this.configureSnotify();
   }

  private configureSnotify(): void {
    const snotifyConfig = ToastDefaults;
    snotifyConfig.toast.timeout = 5000;

    this._sn.setDefaults(snotifyConfig);
  }

  public error(message: string){
    this._sn.error(message);
  }
  
  public success(message: string){
    this._sn.success(message);
  }
}
