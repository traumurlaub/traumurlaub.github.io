import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DateFnsModule} from "ngx-date-fns";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateFnsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
