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
  newListfromLs: any[] = [];

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
      // ProductId
      let objectId = this.cartProduct[i].id;
      // Antal varor totalt 
      this.totalProducts = this.cartProduct.length;
      // Totalt pris
      this.totalPrice += this.cartProduct[i].price;
      // Pusha in i ny lista för att kunna jämföra vad som ska skrivas ut
      this.newListfromLs.push(objectId);

      let objectAmount = this.amount
      // Pusha in produkter i ny lista för att kunna visa i orderRows
      let productOrder = {productId: objectId, amount: objectAmount}
      this.orderRowsList.push(productOrder);

      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////
      
      // for (let j = 0; j < this.newListfromLs.length; j++) {
      //   if (objectId !== this.orderRowsList[i].productId) {
      //     this.amount++
      //     console.log("Hamnar i if")
      //   } else {
      //     this.orderRowsList.push(productOrder);
      //     console.log("Hamnar i else")
      //   }
      // }

      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////
      
      // for (let j = 0; j < this.newListfromLs.length; j++) {
        // this.amount = 1;

        // if (this.cartProduct[i].id !== this.newListfromLs[i].id) {
        //   console.log("Hamnar i if-sats")
        //   this.amount = 1;
        //   let objectAmount = (this.amount++);
        //   // Pusha in produkter i ny lista för att kunna visa i orderRows
        //   let productOrder = {productId: objectId, amount: objectAmount}
        //   this.orderRowsList.push(productOrder);

        //   console.log(this.orderRowsList)
        //   // return 
        // } else if (this.cartProduct[i].id == this.newListfromLs[i].id) {
        //   this.amount = 1;
        //   // let objectAmount = this.amount = 1;
        //   // let productOrder = {productId: 0, amount: objectAmount}
        //   // this.orderRowsList.push(productOrder);
        //   console.log("Hamnar i else if-sats")
        //   // return
        // } else {
        //   console.log("Hamnar i else-sats")
        // }
      // }

      /////////////////////////////////////////////////////////////////////
      //// Detta gör att den räknar men räknar en vara två gånger /////////
      /////////////////////////////////////////////////////////////////////

      // for (let j = 0; j < this.newListfromLs.length; j++) {

      //   if (this.cartProduct[i].id !== this.newListfromLs[j]) {
      //     console.log("Hamnar i if-sats")
      //     let objectAmount = (this.amount = 1);
      //     // Pusha in produkter i ny lista för att kunna visa i orderRows
      //     let productOrder = {productId: objectId, amount: objectAmount}
      //     this.orderRowsList.push(productOrder);

      //     console.log(this.orderRowsList)
      //     return 
      //   } else {
      //     this.amount++
      //     console.log("Hamnar i if-sats")
      //   }
      // }

      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////
      // for (let j = 0; j < this.orderRowsList.length; j++) {
      //   console.log(this.orderRowsList)
      // }

      // // Antal produkter av en sort
      // let objectAmount = this.amount
      // // Pusha in produkter i ny lista för att kunna visa i orderRows
      // let productOrder = {productId: objectId, amount: objectAmount}
      // this.orderRowsList.push(productOrder);


      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////

      // for (let j = 0; j < this.orderRowsList.length; j++) {
      //   if (this.newListfromLs.some((movie) => movie.id === objectId)) {
      //     this.amount = 1
      //     let objektAmount1 = this.amount = 1;
      //     console.log("Hamnar i if")
    
      //     // Pusha in produkter i ny lista för att kunna visa i orderRows
      //     let productOrder1 = {productId: objectId, amount: objektAmount1}
      //     this.orderRowsList.push(productOrder1);
      //   } else {
      //     console.log("Hamnar i else")
      //     // for (let j = 0; j < this.orderRowsList.length; j++) {
      //       // if (this.orderRowsList[j].productId === objectId) {
      //         let objektAmount2 = this.amount++;
      //         console.log("Hamnar i elsens if")
      //         let productOrder2 = {productId: objectId, amount: objektAmount2}
      //         this.orderRowsList.push(productOrder2);
      //     }
      //     // }

      // }


      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////

      // for (let j = 0; j < this.newListfromLs.length; j++) {

      //   if (this.cartProduct[i].id == this.newListfromLs[j]) {
      //       console.log("Hamnar i if1" + " " + this.cartProduct[i].id)
            
      //       // this.newListfromLs = [];
      //       this.orderRowsList = [];
  
      //       let objectId1 = this.cartProduct[i].id;
      //       // Antal produkter av en sort
            
      //       let objektAmount1 = this.amount = 1;
  
      //       // Pusha in produkter i ny lista för att kunna visa i orderRows
      //       let productOrder1 = {productId: objectId1, amount: objektAmount1}
      //       this.orderRowsList.push(productOrder1);
            
      //       return 
      //   }  else {
      //     console.log("Hamnar i else1" + " " + this.cartProduct[i].id)
      //   }
        
      //   for (let k = 0; k < this.orderRowsList.length; k++) {
      //     if (this.cartProduct[i].id == this.orderRowsList[k].productId) {
            
      //       console.log("Hamnar i if2" + " " + this.cartProduct[i].id)

      //       let objektAmount2 = this.amount++;

      //       let productOrder2 = {productId: objectId, amount: objektAmount2}
      //       this.orderRowsList.push(productOrder2);
      //       // return

      //     } else {
      //       console.log("Hamnar i else2" + " " + this.cartProduct[i].id)
      //       return
      //     }
      //   }
      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////

        // // this.amount = 0;
        // console.log(this.newListfromLs);

        // if (this.cartProduct[i].id !== this.newListfromLs[j]) {
          
        //   console.log("Hamnar i if" + " " + this.cartProduct[i].id)
          
        //   // this.newListfromLs = [];
        //   this.orderRowsList = [];

        //   let objectId1 = this.cartProduct[i].id;
        //   // Antal produkter av en sort
          
        //   let objektAmount1 = this.amount = 1;

        //   console.log(this.amount)

        //   // Pusha in produkter i ny lista för att kunna visa i orderRows
        //   let productOrder1 = {productId: objectId1, amount: objektAmount1}
        //   this.orderRowsList.push(productOrder1);
          
        //   // return 

        // } else {

        //   // this.orderRowsList = [];
        //   console.log("Hamnar i else" + " " + this.cartProduct[i].id)
        //   // this.newListfromLs = [];
        //   // this.orderRowsList = [];

        //   // ProductId
        //   let objectId2 = this.cartProduct[i].id;

        //   // Antal produkter av en sort
        //   let objektAmount2 = this.amount++;

        //   // // Pusha in produkter i ny lista för att kunna visa i orderRows
        //   let productOrder2 = {productId: objectId2, amount: objektAmount2}
        //   this.orderRowsList.push(productOrder2);

        //   // return 
        // } 
        // return
      // }
      
    }

    // this.getCartfromLs()
    // for (let i = 0; i < this.cartProduct.length; i++) {
    //   // ProductId
    //   let objectId = this.cartProduct[i].id;
    //   // Antal produkter av en sort
    //   let objectAmount = this.amount
    //   // Pusha in produkter i ny lista för att kunna visa i orderRows
    //   let productOrder = {productId: objectId, amount: objectAmount}
    //   this.orderRowsList.push(productOrder);

    // }
    // if (this.cartProduct[i].id === this.orderRowsList[i].productId) {
      //   console.log("ID finns redan");
      //   let objectAmount = this.amount++
      //   let objectId = this.cartProduct[i].id;
      //   let productOrder = {productId: objectId, amount: objectAmount}
      //   this.orderRowsList.push(productOrder);
      // } else {
      //   console.log("ID finns inte");

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
        // for (let i = 0; i < this.cartProduct.length; i++) {
        //   for (let u = 0; u < this.orderRowsList.length; u++) {

        //     if (this.cartProduct[i].id !== this.orderRowsList[u].productId) {
        //       console.log("Hamnar i if-satsen");
              
        //     } 
            // else {
            //   // console.log("Hamnar i else");
            // }

            
            // // ProductId
            // let objectId = this.cartProduct[i].id;
            // // Antal produkter av en sort
            // let objectAmount = this.amount
            // // Pusha in produkter i ny lista för att kunna visa i orderRows
            // let productOrder = {productId: objectId, amount: objectAmount}
            // this.orderRowsList.push(productOrder);

        //   }
        // }

      // let objectAmount1 = this.amount
      // let objectAmountPlus = this.amount

      // let productOrder1 = {productId: objectId, amount: objectAmount1}
      // let productOrder2 = {productId: objectId, amount: objectAmountPlus}
    
      // // for (let j = 0; j < this.orderRowsList.length; j++) {

      //   if (this.cartProduct[i].id == this.orderRowsList[i].productId) {
      //     console.log("Samma id finns")
      //     this.orderRowsList.push(productOrder1);
      //   } else {
      //     this.orderRowsList.push(productOrder2);
      //   }

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
        
        // let productOrder = {productId: objectId, amount: objectAmount1}
        // Pusha in produkter i ny lista för att kunna visa i orderRows
        // this.orderRowsList.push(productOrder);
      // }
    // };

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

    // let objectAmount = this.amount;


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


