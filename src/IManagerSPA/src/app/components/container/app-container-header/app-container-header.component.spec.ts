import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContainerHeaderComponent } from './app-container-header.component';

describe('AppContainerHeaderComponent', () => {
  let component: AppContainerHeaderComponent;
  let fixture: ComponentFixture<AppContainerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContainerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
