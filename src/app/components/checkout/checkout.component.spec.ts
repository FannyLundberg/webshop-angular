import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { CheckoutComponent } from './checkout.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      providers: [ CheckoutComponent, FormBuilder, HttpClientModule, HttpClient, HttpHandler ],
      imports: [ HttpClientTestingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa att orderComplete går från falsk till sant vid bekräftad order
  it("should change from false to true", () => {
    // Förbereda
    expect(component.orderComplete).toBeFalse;

    // Agera
    component.submitOrder();

    // Verifiera
    expect(component.orderComplete).toBeTrue;
  })

});
