import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOrder } from 'src/app/models/IOrder';
import { IProduct } from 'src/app/models/IProduct';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartProduct: IProduct[] = [];
  totalPrice: number = 0;
  totalProducts: any = 0;
  orderComplete = false;
  productId: number = 0;
  product = null;
  amount: number = 0;
  id = Number();
  orderId = Number();
  newFormData: IOrder[] = [];
  orderRows: any[] = [];
  orderRowsList: IProduct[] = [];

  orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private service: OrderService) { }

  ngOnInit(): void {
    this.getCartfromLs();
  }

  // Hämta ut lista från localStorage för att visa belopp på beställningen
  getCartfromLs() {
    let cartObject = localStorage.getItem("productCart") || "[]";
    this.cartProduct = JSON.parse(cartObject);

    // Totalsumma, namn och id för valda varor
    for (let i = 0; i < this.cartProduct.length; i++) {
      this.totalPrice += this.cartProduct[i].price;
      this.totalProducts = this.cartProduct.length;
      // this.productId = this.cartProduct[i].id;
    };

    // Pusha in filmer från ls i lista för att kunna visa i orderRows
    this.cartProduct.forEach((product) => {
        if (this.cartProduct.length > 0) {
          this.orderRowsList.push(product);
          console.log(this.orderRowsList);
        }
    });
  }

  // Hämta förnamn
  get firstName() {
    return this.orderForm.get("firstName");
  }

  // Hämta efternamn
  get lastName() {
    return this.orderForm.get("lastName");
  }

  // Bekräfta order
  submitOrder() {

    let name = this.orderForm.value.firstName + " " + this.orderForm.value.lastName;

    const newFormData = { 
      id: 0, 
      companyId: 30,
      created: new Date,
      createdBy: name,
      paymentMethod: "PayPal",
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: this.loopOrderRows()
      // [    
      //   {
      //       id: Number(),
      //       productId: this.productId,
      //       product: null,
      //       amount: 1,
      //       orderId: Number()
      //     } 
      // ]
    };
    this.service.orderProduct(newFormData).subscribe(data => {
      this.orderComplete = true;
      console.log(data);
    });
  }

  loopOrderRows() {
    for (let i = 0; i < this.orderRowsList.length; i++) {
      this.id = Number()
      this.productId = this.productId
      this.product = null,
      this.amount = 1,
      this.orderId = Number()
    };
  }

}


