import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IProduct[] = [];
  productId: number = 0;
  
  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
      this.service.getProduct();

      this.service.productData$.subscribe((dataFromProductApi: IProduct[]) => {
        this.product = dataFromProductApi;

        this.route.params.subscribe((p) => {
          this.productId = +p["id"]
        })
      })
  }

}
