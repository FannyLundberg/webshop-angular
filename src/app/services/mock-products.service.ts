import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MockProductsService {
  private productData = new Subject<IProduct[]>();
  productData$ = this.productData.asObservable();
  
  private testData: IProduct[] = [
    // (711,
    // "Hide and seek",
    // "Denna film handlar om...",
    // 159,
    // "Finns ingen poster",
    // 2005,
    // [
    //     { 
    //         category: null,
    //         categoryId: 6
    //     }

    // ]
    // )]
  ]

  getTestData() {
    this.productData.next(this.testData)
  }

}
