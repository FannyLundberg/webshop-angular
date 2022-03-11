import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: IProduct[] = [];
  productsRead: boolean = false;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
      
      // Ändras till true när produkterna är inlästa
      this.productsRead = true;
    })
    this.service.getProduct();
  }

}
