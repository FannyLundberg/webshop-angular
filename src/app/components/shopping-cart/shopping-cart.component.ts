import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartProduct: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCartfromLs();
  }  

  // Hämta data från localStorage
  getCartfromLs() {
    let cartObject = localStorage.getItem("productCart") || "[]";
    this.cartProduct = JSON.parse(cartObject);
  };

  // Ta bort produkt ur varukorgen och ls
  removeProduct(i: number) {
    
    // Ta bort klickad produkt
    this.cartProduct.splice(i, 1);

    // Sätta listan till ls efter manipulering
    localStorage.setItem("productCart", JSON.stringify(this.cartProduct));

    // Hämta ut nya listan igen
    this.getCartfromLs();
  };

}
