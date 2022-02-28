import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent,
    CheckoutComponent,
    NotfoundComponent,
    DetailsComponent,
    ProductComponent,
    AdminComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
