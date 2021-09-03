import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClwLibRoutingModule } from './clw-lib-routing.module';
import { ClwLibComponent } from './clw-lib.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { LastNameComponent } from './last-name/last-name.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    ClwLibComponent,
    FirstNameComponent,
    LastNameComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    ClwLibRoutingModule
  ],
  exports: [
    FirstNameComponent,
    LastNameComponent,
    EmailComponent
  ],
  providers: [],
  bootstrap: [ClwLibComponent]
})
export class ClwLibModule { }
