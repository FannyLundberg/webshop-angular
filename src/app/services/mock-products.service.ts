import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MockProductsService {
  
  private productData = new Subject<IProduct>();
  productData$: Observable<IProduct> = this.productData.asObservable();

  constructor() {}

  private mockData: IProduct = {
    id: 19910811,
    name: "Fanny",
    description: "Jag är glad",
    price: 123456789, 
    imageUrl: "string",
    year: 1991,
    productCategory: [
        { 
            category: null,
            categoryId: 11,
        }
  
    ]
  };

  getProduct(): void {
    this.productData.next(this.mockData);
  }

}
