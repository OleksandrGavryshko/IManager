import { Component, ViewChild } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get useAppContainerClass(): boolean {
    if (!this._headerComponent || this._headerComponent.isStartPage)
      return false;

    return true;
  }

  @ViewChild(HeaderComponent, { static: true })
  private _headerComponent: HeaderComponent;

  constructor(
    public snotifyService: SnotifyService
  ) { }

}
