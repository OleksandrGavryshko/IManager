import { Component, OnInit } from '@angular/core';

import { MenuElement } from './menu-element';
import { menu } from './menu';

@Component({
  selector: 'app-container-sidebar',
  templateUrl: './app-container-sidebar.component.html',
  styleUrls: ['./app-container-sidebar.component.scss']
})
export class AppContainerSidebarComponent implements OnInit {

  public menu = menu;
  public activeMenu: MenuElement;
  // public expandedMenuIds: number[];

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuClick(menu: MenuElement): void {
    this.activeMenu = menu;

  }

  public isActive(menu: MenuElement): boolean {
    if (!this.activeMenu)
      return false;
    return this.activeMenu.id == menu.id;
  }

}
