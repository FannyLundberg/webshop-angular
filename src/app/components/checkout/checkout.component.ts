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
      // let objectId = this.cartProduct[i].id;
      // Antal av en produkt
      
      // Pusha in i nya listan för att visa på orderRows
      // let productOrder = {productId: objectId, amount: objectAmount}
      // this.orderRowsList.push(productOrder);
    

      // if (this.cartProduct[i].id === this.orderRowsList[i].productId) {
      //   console.log("ID finns redan");
      //   let objectAmount = this.amount++
      //   let objectId = this.cartProduct[i].id;
      //   let productOrder = {productId: objectId, amount: objectAmount}
      //   this.orderRowsList.push(productOrder);
      // } else {
      //   console.log("ID finns inte");
        let objectAmount = this.amount = 1
        let objectId = this.cartProduct[i].id;
        let productOrder = {productId: objectId, amount: objectAmount}
        // Pusha in produkter i ny lista för att kunna visa i orderRows
        this.orderRowsList.push(productOrder);
      
    };

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

    let objectAmount = this.amount;


    //   for (let i = 0; i < this.cartProduct.length; i++) {
    //     for (let j = 0; j < this.orderRowsList.length; j++)
    //       if (this.cartProduct[i].id == this.orderRowsList[j].productId) {
    //         let objectAmount = this.amount++;
    //         let productAmount = {productId: 0, amount: objectAmount}
    //         this.orderRowsList.push(productAmount);
    //         console.log("Ej pusha objekt, plussa amount");
            
    //       } else {
    //         objectAmount = this.amount;
    //         let objectId = this.cartProduct[i].id;
    //         let productAmount = {productId: objectId, amount: objectAmount}
    //         this.orderRowsList.push(productAmount);
    //         console.log("Pusha objekt");
    //       }
    // }

    // for (let i = 0; i < this.cartProduct.length; i++) {
    //   for (let j = 0; j < this.orderRowsList.length; j++) {

    //   // ProduktId
    //   let objectId = this.cartProduct[i].id;
    //   let orderRowObejctId = this.orderRowsList[j].productId;

    //   if (objectId == orderRowObejctId) {
    //     console.log("Hamnar i if-sats")
    //   } else {
    //     console.log("Hamnar i else")
    //   }

    //   };
    // };

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


