import { TestBed } from '@angular/core/testing';

import {  SidebarToggleService } from './side-bar-toggle.service';

describe('SideBarToggleService', () => {
  let service: SidebarToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
