import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  order: IOrder[] = [];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.orderData$.subscribe((dataFromOrderApi: IOrder[]) => {
      this.order = dataFromOrderApi;
    })
    this.service.getOrder();
    console.log(this.order);
    
  }

}
