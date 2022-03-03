import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin.service';
// import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  order: IOrder[] = [];
  orderDelete: IOrder[] = [];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.orderData$.subscribe((dataFromOrderApi: IOrder[]) => {
      this.order = dataFromOrderApi;
    })
    this.service.getOrder()
  }

  // deleteOrder(i: number) {
    
  //   let orderDelete = this.order[i];
  //   console.log(orderDelete);
    
  //   this.service.deleteOrders(this.orderDelete).subscribe(data => {
  //     console.log(data);
  //   })
  //   // this.service.deleteOrders(orderDelete).subscribe((deleteFromOrderApi) => {
  //   //   console.log(deleteFromOrderApi);
  //   // });
  //   // this.service.deleteOrders(i);
  //   // console.log(i);
  // }

}
