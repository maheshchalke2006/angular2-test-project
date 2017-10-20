import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
