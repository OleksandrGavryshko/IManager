import { AppContainerSidebarService } from './app-container-sidebar.service';
import { TestBed } from '@angular/core/testing';

describe('SidebarService', () => {
  let service: AppContainerSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppContainerSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
