import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import {JuguetesComponent} from './juguetes/juguetes.component';
import {HomeLineaBlancaComponent} from './home-linea-blanca/home-linea-blanca.component';
import {HomeRopaComponent} from './home-ropa/home-ropa.component';
import {ComputacionComponent} from './computacion/computacion.component';

const routes: Routes = [

  { path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
     { path: 'home',
      component: HomeComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'home/:id',
      component: ProductDetailComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'homejuguetes',
      component: JuguetesComponent
    },
    {
      path: 'homecomputacion',
      component: ComputacionComponent
    },
    {
      path: 'homeropa',
      component: HomeRopaComponent
    },
    {
      path: 'homelineablanca',
      component: HomeLineaBlancaComponent
    }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
