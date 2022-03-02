import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/IProduct';
import { OrderService } from 'src/app/services/order.service';

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
  // productName: any = "";
  
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

    // Räkna ut totalsumman för valda varor
    for (let i = 0; i < this.cartProduct.length; i++) {
      this.totalAmount += this.cartProduct[i].price;
    }

    // Räkna ut orderrader för valda varor
    for (let i = 0; i < this.cartProduct.length; i++) {
      this.totalProducts = this.cartProduct.length;
    }

    // // Skriva ut varje titel 
    // for (let i = 0; i < this.cartProduct.length; i++) {
    //   this.productName = this.cartProduct[i].name;
    //   console.log(this.productName);
    // }
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

    let name = this.orderForm.value.firstName + this.orderForm.value.lastName;

    const newFormData = { 
      id: 0, 
      companyId: 30,
      created: new Date,
      createdBy: name,
      paymentMethod: "PayPal",
      totalPrice: this.totalAmount,
      status: 0,
      orderRows: []
      // orderRows: this.productName
      // orderRows: [this.productName]
    };
    
    this.service.orderProduct(newFormData).subscribe(data => {
      this.orderComplete = true;
    });
  }

}
