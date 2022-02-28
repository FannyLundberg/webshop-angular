import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IProduct[] = [];
  choosenProduct: any = [];
  
  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
      this.service.getProduct();

      this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
        this.product = dataFromProductApi;

        // Kör funktion för att hämta data från ls
        this.getProductfromLs();
      })
  }

  // Hämta data från localStorage
  getProductfromLs() {
    this.choosenProduct = localStorage.getItem("productDetails") || "[]";
    this.choosenProduct = JSON.parse(this.choosenProduct);
  }

}
