import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaginationGridComponent } from './client-pagination-grid.component';

describe('ClientPaginationGridComponent', () => {
  let component: ClientPaginationGridComponent;
  let fixture: ComponentFixture<ClientPaginationGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPaginationGridComponent]
    });
    fixture = TestBed.createComponent(ClientPaginationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
