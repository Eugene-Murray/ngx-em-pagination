import { NgModule } from '@angular/core';
import { NgxClientPaginationService } from './ngx-client-pagination.service';
import { NgxClinetPaginationComponent } from './ngx-client-pagination.component';

@NgModule({
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
