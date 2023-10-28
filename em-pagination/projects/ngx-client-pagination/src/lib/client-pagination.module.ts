import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPaginationGridComponent } from './container/client-pagination-grid.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { ClientPaginationComponent } from './components/client-pagination/client-pagination.component';
import { ClientPaginationService } from './services/client-pagination.service';
import { FilterService } from './services/filter.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClientPaginationGridComponent,
    DataFilterComponent,
    ClientPaginationComponent
  ],
  exports: [
    ClientPaginationGridComponent,
    ClientPaginationComponent
  ],
  providers: [
    ClientPaginationService,
    FilterService
  ]
})
export class NgxClientPaginationModule { }
