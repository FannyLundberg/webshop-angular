// import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOrder } from 'src/app/models/IOrder';
import { IProduct } from 'src/app/models/IProduct';
import { OrderService } from 'src/app/services/order.service';
// import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartProduct: IProduct[] = [];
  totalAmount: number = 0;
  totalProducts: any = 0;
  orderComplete = false;
  productName: string = "";
  productId: number = 0;
  productAmount: number = 0;
  newFormData: IOrder[] = [];
  

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
      this.totalAmount += this.cartProduct[i].price;
      this.productAmount = this.cartProduct[i].price;
      this.totalProducts = this.cartProduct.length;
      this.productName = this.cartProduct[i].name;
      this.productId = this.cartProduct[i].id;
    }
  }

  // Hämta förnamn
  get firstName() {
    return this.orderForm.get("firstName");
  }

  // Hämta efternamn
  get lastName() {
    return this.orderForm.get("lastName");
  }

  // // Hämta adress
  // get address() {
  //   return this.orderForm.get("address");
  // }

  // Bekräfta order
  submitOrder() {

    let name = this.orderForm.value.firstName + " " + this.orderForm.value.lastName;

    const newFormData = { 
      id: 0, 
      companyId: 30,
      created: new Date,
      createdBy: name,
      paymentMethod: "PayPal",
      totalPrice: this.totalAmount,
      status: 0,
      orderRows: [
        { 
          id: Number(),
          productId: this.productId,
          product: null,
          amount: this.productAmount,
          orderId: Number()
        }
      ],
    };
    this.service.orderProduct(newFormData).subscribe(data => {
      this.orderComplete = true;
      console.log(data);
    });
  }

}
