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
  }
  
}
