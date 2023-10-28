import { TestBed } from '@angular/core/testing';
import { NgxClientPaginationService } from './client-pagination.service';



describe('NgxClinetPaginationService', () => {
  let service: NgxClientPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxClientPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
