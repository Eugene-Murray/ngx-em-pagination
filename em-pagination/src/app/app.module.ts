import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxClientPaginationModule } from 'projects/ngx-client-pagination/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { PaginationGridComponent } from './components/pagination-grid/pagination-grid.component';
import { PaginationOnlyComponent } from './components/pagination-only/pagination-only.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationGridComponent,
    PaginationOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxClientPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
