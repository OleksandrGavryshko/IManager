import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IManagerSPA';

  constructor(
    private snotifyService: SnotifyService
  ) {
  }
}
