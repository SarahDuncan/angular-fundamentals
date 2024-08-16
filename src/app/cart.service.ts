import { Injectable } from '@angular/core';
import { IProduct } from './catalogue/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private http: HttpClient) { }

  add(product: IProduct){
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log('Cart updated, product added is ' + product.name);
    });
  }
}
