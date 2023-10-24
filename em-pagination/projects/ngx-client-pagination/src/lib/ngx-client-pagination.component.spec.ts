import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClinetPaginationComponent } from './ngx-client-pagination.component';

describe('NgxClinetPaginationComponent', () => {
  let component: NgxClinetPaginationComponent;
  let fixture: ComponentFixture<NgxClinetPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxClinetPaginationComponent]
    });
    fixture = TestBed.createComponent(NgxClinetPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
