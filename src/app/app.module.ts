import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { LastNameComponent } from './last-name/last-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    LastNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    FirstNameComponent,
    LastNameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
