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
  shoppingCart: object[] = [];
  buyProduct: IProduct[] = []

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
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

    let buyProduct = this.product[i];
    // console.log(buyProduct);
    this.shoppingCart.push(buyProduct);
    this.saveCartToLs(i);
    console.log(this.shoppingCart);
  }

  // Spara till localStorage Details
  saveDetailsToLs(i: number) {
    localStorage.setItem("productDetails", JSON.stringify(this.product[i]));
  }

  // Spara till localStorage ShoppingCart
  saveCartToLs(i: number) {
    localStorage.setItem("productCart", JSON.stringify(this.shoppingCart));
  }

  // Funkar för att spara en film och skriva ut i HTML i shopping-cart-komponent
  // // Spara till localStorage ShoppingCart
  // saveCartToLs(i: number) {
  //   localStorage.setItem("productCart", JSON.stringify(this.product[i]));
  // }

}
