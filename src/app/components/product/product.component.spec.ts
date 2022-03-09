import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { ProductComponent } from './product.component';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';
import { MockProductsService } from 'src/app/services/mock-products.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  // let i: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [{ provide: ProductsService, useClass: MockProductsService }, HttpClientModule, HttpClient, HttpHandler ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  ////////////////////////////////

  @Component({
    template: `</ProductComponent [product]="data">`
  })

  class TestHostComponent {
    data: IProduct = { 
      id: 19910811, 
      name: "Fanny", 
      description: "Jag är glad", 
      price: 123456789, 
      imageUrl: "string",
      year: 1991,
      productCategory: [
        { 
            category: null,
            categoryId: 11,
        }
      ]
    };
  }


  it("should be Fanny", () => {
    // Förbereda
    expect(component.mockProduct[0].id).toBe(19910811);
  })


  ////////////////////////////////


  // // Testa att alert kommer upp vid klick på Köp-knapp / tillagd vara
  // it("should show alert", () => {
  //   // Förbereda
  //   expect(component.addToCart).not;

  //   // Agera
  //   component.addToCart(i);

  //   // Verifiera
  //   expect(alert).toBe("Din vara har lagts till i varukorgen 💃");
  // })

});
