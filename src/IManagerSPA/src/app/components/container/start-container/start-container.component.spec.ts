import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartContainerComponent } from './start-container.component';

describe('StartContainerComponent', () => {
  let component: StartContainerComponent;
  let fixture: ComponentFixture<StartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
