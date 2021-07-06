import { Component, ViewChild } from '@angular/core';

import { StartContainerHeaderComponent } from '../start-container-header/start-container-header.component';

@Component({
  selector: 'app-start-container',
  templateUrl: './start-container.component.html',
  styleUrls: ['./start-container.component.scss']
})
export class StartContainerComponent {

  public get useAppContainerClass(): boolean {
    if (!this._headerComponent || this._headerComponent.isStartPage)
      return false;

    return true;
  }

  @ViewChild(StartContainerHeaderComponent, { static: true })
  private _headerComponent: StartContainerHeaderComponent;

  constructor(

  ) { }

}
