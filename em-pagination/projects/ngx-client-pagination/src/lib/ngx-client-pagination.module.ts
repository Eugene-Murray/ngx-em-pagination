import { NgModule } from '@angular/core';
import { NgxClientPaginationService } from './ngx-client-pagination.service';
import { NgxClinetPaginationComponent } from './ngx-client-pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxClinetPaginationComponent
  ],
  exports: [
    NgxClinetPaginationComponent
  ],
  providers: [
    NgxClientPaginationService
  ]
})
export class NgxClinetPaginationModule { }
