import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxClinetPaginationModule } from 'projects/ngx-client-pagination/src/public-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxClinetPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
