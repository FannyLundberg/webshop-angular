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
  productNr: number = 0;

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
      console.log(this.product)
    })
    this.service.getProduct();
  }

  showDetails(i: number) {
    console.log("Hej");
    console.log(i);
    console.log(this.productNr);  
  
    return this.productNr = i;
  }

}
