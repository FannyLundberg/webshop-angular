import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';
import { IProductData } from '../models/IProductData';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productData = new Subject<IProduct[]>();
  productData$ = this.productData.asObservable();

  constructor(private http: HttpClient) { }

  // Hämta data från API utifrån struktur på interfacet
  getProduct() {
    this.http
    .get<IProductData>(environment.productURL)
    .subscribe((dataFromProductApi) => {
      this.productData.next(dataFromProductApi.products);
      console.log(dataFromProductApi.products);
    })
  }

}
