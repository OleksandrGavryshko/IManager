import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContainerSidebarComponent } from './app-container-sidebar.component';

describe('AppContainerSidebarComponent', () => {
  let component: AppContainerSidebarComponent;
  let fixture: ComponentFixture<AppContainerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContainerSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
