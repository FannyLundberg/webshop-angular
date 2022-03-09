import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let i: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [ProductComponent, HttpClientModule, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Testa att alert kommer upp vid klick på Köp-knapp / tillagd vara
  it("should show alert", () => {
    // Förbereda
    expect(alert).not;

    // Agera
    component.addToCart(i);

    // Verifiera
    expect(alert).toBe("Din vara har lagts till i varukorgen 💃");
  })

});
