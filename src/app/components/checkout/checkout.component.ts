import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  totalProducts: number = 0;
  orderComplete = false;
  amount: number = 1;
  orderRowsList: IOrderRows[] = [];

  // Formulär
  orderForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private service: OrderService) { }

  ngOnInit(): void {
    this.getCartfromLs();
  }

  // Hämta ut lista från localStorage
  getCartfromLs() {
    let cartObject = localStorage.getItem("productCart") || "[]";
    this.cartProduct = JSON.parse(cartObject);

    for (let i = 0; i < this.cartProduct.length; i++) {
      
      // ProduktId
      let objectId = this.cartProduct[i].id;
      
      // Antal varor totalt 
      this.totalProducts = this.cartProduct.length;
      
      // Totalt pris
      this.totalPrice += this.cartProduct[i].price;

      // Antal av en produkt
      let objectAmount = this.amount;

      // Variabel för objektet som ska pushas in i orderRowsList
      let productOrder = {productId: objectId, amount: objectAmount}

        // Om varan inte finns, pusha in objekt med id och antal 1
        if (!this.orderRowsList.some((product) => product.productId === this.cartProduct[i].id)) {
          this.orderRowsList.push(productOrder)
        } else {
          for (let j = 0; j < this.orderRowsList.length; j++) {
            if (this.orderRowsList[j].productId === this.cartProduct[i].id) {

              // Om redan varan finns, öka antal produkter med 1
              this.orderRowsList[j].amount++
            }
          }
        }
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

  // Körs vid tryck på "Beställ"
  submitOrder() {

    // Variabel för CreatedBy
    let name = this.orderForm.value.firstName + " " + this.orderForm.value.lastName;

    // Variabel som skickas till order-API
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
    });
  }

}


