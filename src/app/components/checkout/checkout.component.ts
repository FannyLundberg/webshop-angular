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

    for (let i = 0; i < this.cartProduct.length; i++) {
      // Totalpris för ordern
      this.totalPrice += this.cartProduct[i].price;
      // Antal produkter i ordern
      this.totalProducts = this.cartProduct.length;
      // ProduktId
      let objectId = this.cartProduct[i].id;
      // Antal av en produkt
      let objectAmount = this.amount;
      // Pusha in i nya listan för att visa på orderRows
      let productOrder = {productId: objectId, amount: objectAmount}
      this.orderRowsList.push(productOrder);
      
      

      // this.cartProduct.forEach((p) => {
      //   for (let i = 0; i < cartObject.length; i++) {
      //     if (p.id === this.orderRowsList[i].productId) {
      //       let objectAmount = this.amount++;
      //       let productAmount = {productId: 0, amount: objectAmount}
      //       this.orderRowsList.push(productAmount);
      //       ("Ej pusha objekt, plussa amount")
      //     } else {
      //       
      //       ("Push objekt")
      //     }
      //   }
      // })


      // if (this.cartProduct[i].id === this.orderRowsList[i].productId) {
      //   console.log("ID finns redan");
      //   this.amount++
      // } else {
      //   console.log("ID finns inte");
      //   this.amount = 1
      //   // Pusha in produkter i ny lista för att kunna visa i orderRows
      //   this.orderRowsList.push(productOrder);
      // }

      // this.orderRowsList = [];
      // this.cartProduct.forEach((p) => {
      //   for (let i = 0; i < this.cartProduct.length; i++) {
      //     if (p.id === this.orderRowsList[i].productId) {
      //       console.log("Pusha nytt objekt till listan")
            
      //     } else {
      //       this.amount += 1;
      //       console.log("Pusha inte ny, lägg på 1 amount")
      //     }
      //   }
      // })
      
      
      // console.log(this.orderRowsList);
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


