import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  products : any;
  filter: string = '';

  constructor(
    private cartService: CartService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }

  getFilteredProducts() {
    return this.filter == ''
    ? this.products
    : this.products.filter((product: any) => product.category == this.filter);
  }

  addToCart(product: IProduct){
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }
}
