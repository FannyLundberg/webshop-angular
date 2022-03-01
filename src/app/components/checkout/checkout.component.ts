import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOrder } from 'src/app/models/IOrder';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartProduct: IProduct[] = [];
  totalAmount: number = 0;
  orderFormat: IOrder[] = [];

  // URL som order ska till (tillagt i environments):
  // orderURL

  orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCartfromLs();
  }

  // Hämta ut lista från localStorage för att visa belopp på beställningen
  getCartfromLs() {
    let cartObject = localStorage.getItem("productCart") || "[]";
    this.cartProduct = JSON.parse(cartObject);

    for (let i = 0; i < this.cartProduct.length; i++) {
      this.totalAmount += this.cartProduct[i].price;
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

  // Hämta adress
  get address() {
    return this.orderForm.get("address");
  }

  // Bekräfta order
  submitOrder() {
    alert("Din beställning är nu på väg till dig 🎉")
  }

}
