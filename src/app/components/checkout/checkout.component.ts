import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  choosenProduct: any = [];
  amountToPay: number = 0;
  

  orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required],

    // Vad som behöver vara med i order till databasen
    id: [0],
    companyId: [30],
    created: [Date],
    createdBy: [null],
    paymentMethod: ["Paypal"],
    totalPrice: [0],
    status: [0],
    orderRows: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.amountToPay = this.choosenProduct.price;
  }

  // Hämta data från localStorage
  getProductfromLs() {
    this.choosenProduct = localStorage.getItem("productDetails") || "[]";
    this.choosenProduct = JSON.parse(this.choosenProduct);
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
