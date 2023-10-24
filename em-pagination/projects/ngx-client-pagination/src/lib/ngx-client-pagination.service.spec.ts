import { TestBed } from '@angular/core/testing';

import { NgxClinetPaginationService } from './ngx-client-pagination.service';

describe('NgxClinetPaginationService', () => {
  let service: NgxClinetPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxClinetPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
