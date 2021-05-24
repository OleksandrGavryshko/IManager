import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppContainerSidebarService {


  //public $toggleSideBar: BehaviorSubject<void>;

  constructor() {
    //this.$toggleSideBar = new BehaviorSubject<void>(null);
   }

  public toggleSideBar(): void {

  }
}
