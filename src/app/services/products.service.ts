import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';
import { IProductService } from './IProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProductService {

  private productData = new Subject<IProduct[]>();
  public productData$: Observable<IProduct[]> = this.productData.asObservable();

  constructor(private http: HttpClient) { }

  // Hämta data från API utifrån struktur på interfacet
  getProduct() {
    this.http
    .get<IProduct[]>(environment.productURL)
    .subscribe((dataFromProductApi) => {
      this.productData.next(dataFromProductApi);
      // console.log(dataFromProductApi);
    })
  }

}
