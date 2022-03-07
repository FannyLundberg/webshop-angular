import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MockProductsService {
  
  private productData = new Subject<IProduct[]>();
  productData$ = this.productData.asObservable();

  // // ngOnInit() {
  //   private testData: IProduct[] = [
  //     { 
  //       id: 0, 
  //       companyId: 10001,
  //       created: 19910811,
  //       createdBy: "Testperson",
  //       paymentMethod: "Kontant",
  //       totalPrice: 199,
  //       status: 11,
  //       orderRows: [],
  //     };
  //   ]
     
testData: IProduct[] = {
    id: 0,
    name: "string",
    description: "string",
    price: 0, 
    imageUrl: "string",
    year: 1991,
    productCategory: [
        { 
            category: null,
            categoryId: 0,
        }

    ]
}


  getTestData() {
    // this.productData.next(this.testData)
  }

}
