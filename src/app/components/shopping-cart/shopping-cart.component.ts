import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  product: IProduct[] = [];
  cartProduct: any = [];

  constructor(private service: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getProduct();

      this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
        this.product = dataFromProductApi;

        // Kör funktion för att hämta data från ls
        this.getCartfromLs();
      })
  }  

  // Hämta data från localStorage
  getCartfromLs() {
    let cartObject = localStorage.getItem("productCart") || "[]";
    this.cartProduct = JSON.parse(cartObject);
    console.log(cartObject);
    console.log(this.cartProduct);
  }
  
}
