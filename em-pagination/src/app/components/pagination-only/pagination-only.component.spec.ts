import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationOnlyComponent } from './pagination-only.component';

describe('PaginationOnlyComponent', () => {
  let component: PaginationOnlyComponent;
  let fixture: ComponentFixture<PaginationOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationOnlyComponent]
    });
    fixture = TestBed.createComponent(PaginationOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
