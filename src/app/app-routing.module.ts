import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
  {path: 'catalog', component: CatalogueComponent, title: "Catalog - Joe's Robot Shop"},
  {path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
  {path: 'sign-in', component: SignInComponent, title: "Sign In - Joe's Robot Shop"}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
