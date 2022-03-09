import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { MockProductsService } from 'src/app/services/mock-products.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: IProduct[] = [];
  buyProduct: IProduct[] = [];
  productLs: IProduct[] = [];
  mockProduct: any;

  constructor(private service: ProductsService, private mockService: MockProductsService) { }

  ngOnInit(): void {
    this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
    })
    this.service.getProduct();

    // Mocktjänsten
    this.mockService.productData$.subscribe((mockData: IProduct) => {
      this.mockProduct = mockData;
    })
    this.mockService.getProduct();
  }

  // Lägg till i varukorg
  addToCart(i: number) {
    alert("Din vara har lagts till i varukorgen 💃")

    let buyProduct = this.product[i];
    this.saveCartToLs(buyProduct);
  }

  // Spara till localStorage för varukorgen
  saveCartToLs(buyProduct: IProduct) {
    let productList = localStorage.getItem("productCart") || "[]";
    this.productLs = JSON.parse(productList);

    this.productLs.push(buyProduct);
    localStorage.setItem("productCart", JSON.stringify(this.productLs));
  }

}
