import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { AdminService } from 'src/app/services/admin.service';

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

  deleteOrder(id: number) {
    this.service.deleteOrders(id);
  }

}
