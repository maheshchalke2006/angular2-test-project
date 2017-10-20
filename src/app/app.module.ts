import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { AdminHomepageComponent } from './component/admin-homepage/admin-homepage.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { PaymentListComponent } from './component/payment-list/payment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    AdminHomepageComponent,
    UserListComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
