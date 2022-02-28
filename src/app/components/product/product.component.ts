import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: IProduct[] = [];
  //productNr: number = 0;
  shoppingCart: [] = [];

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
      // console.log(this.product)
    })
    this.service.getProduct();
  }

  // Detaljer om produkt
  showDetails(i: number) {
    this.saveDetailsToLs(i);
  }

  // Lägg till i varukorg
  addToCart(i: number) {
    alert("Din vara har lagts till i varukorgen 💃")

    // this.shoppingCart.push();
    this.saveCartToLs(i);
    console.log(this.shoppingCart);
  }

  // Spara till localStorage Details
  saveDetailsToLs(i: number) {
    localStorage.setItem("productDetails", JSON.stringify(this.product[i]));
  }

  // Spara till localStorage ShoppingCart
  saveCartToLs(i: number) {
    localStorage.setItem("productCart", JSON.stringify(this.product[i]));
  }

}
