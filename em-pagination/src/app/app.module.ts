import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxClinetPaginationModule } from 'projects/ngx-client-pagination/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxClinetPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
