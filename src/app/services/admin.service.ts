import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private orderData = new Subject<IOrder[]>();
  orderData$ = this.orderData.asObservable();

  constructor(private http: HttpClient) { }

  // Hämta data från API med lagda ordrar
  getOrder() {
    this.http
    .get<IOrder[]>(environment.adminURL)
    .subscribe((dataFromOrderApi) => {
      this.orderData.next(dataFromOrderApi);
      console.log(dataFromOrderApi);
    })
  }

}
