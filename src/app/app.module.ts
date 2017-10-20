import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
