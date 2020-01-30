import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeLineaBlancaComponent } from './home-linea-blanca/home-linea-blanca.component';
import { HomeRopaComponent } from './home-ropa/home-ropa.component';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { ComputacionComponent } from './computacion/computacion.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    LayoutComponent,
    CategoriasComponent,
    HomeLineaBlancaComponent,
    HomeRopaComponent,
    JuguetesComponent,
    ComputacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
