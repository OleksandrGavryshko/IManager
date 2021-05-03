import { SnotifyService, ToastDefaults } from 'ng-snotify';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IManagerSPA';

  constructor(
    private _snotifyService: SnotifyService
  ) {
    this.configureSnotify();
  }

  private configureSnotify(): void {
    const snotifyConfig = ToastDefaults;
    snotifyConfig.toast.timeout = 5000;

    this._snotifyService.setDefaults(snotifyConfig);
  }
}
