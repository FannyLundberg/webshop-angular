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
  productNr: any = [];
  
  constructor(private route: ActivatedRoute, private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    console.log("produktnr" + this.productNr)
    console.log("produkt" + this.product)

    this.route.params.subscribe((p) => {
      this.productNr = +p["id"];

      this.productNr = this.service.getProduct();

      this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
        this.product = dataFromProductApi;
        console.log(this.product)
      })
    })
  }

}
