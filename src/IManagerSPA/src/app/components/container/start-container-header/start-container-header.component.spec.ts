import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartContainerHeaderComponent } from './start-container-header.component';

describe('StartContainerHeaderComponent', () => {
  let component: StartContainerHeaderComponent;
  let fixture: ComponentFixture<StartContainerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartContainerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartContainerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
