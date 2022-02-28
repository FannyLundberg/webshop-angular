import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  choosenProduct: any = [];
  
  orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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

  submitOrder() {
    alert("Din beställning är nu på väg till dig 🎉")
  }

}
