import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { IOrder } from 'src/app/models/IOrder';
import { IOrderRows } from 'src/app/models/IOrderRows';
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
  amount: number = 1;
  orderRows: IOrderRows | undefined;
  orderRowsList: IOrderRows[] = [];

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
      // Totalpris för ordern
      this.totalPrice += this.cartProduct[i].price;
      // Antal produkter
      this.totalProducts = this.cartProduct.length;


      // Pusha in produkter i ny lista för att kunna visa i orderRows
      let objectId = this.cartProduct[i].id;
      


      // if (this.cartProduct[i].id == this.orderRows?.productId) {
      //   console.log("ID finns redan");
      //   this.amount + 1
      // } else {
      //   console.log("ID finns redan");
      //   this.amount = 1
      // }

      let objectAmount = this.amount;
      // let objectPrice = this.amount;
      let productOrder = {productId: objectId, amount: objectAmount}
      this.orderRowsList.push(productOrder);
      console.log(this.orderRowsList);
    };

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
      orderRows: this.orderRowsList,
    };
  
    this.service.orderProduct(newFormData).subscribe(data => {
      this.orderComplete = true;
      console.log(data);
    });
  }

}


