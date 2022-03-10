import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { ProductComponent } from './product.component';
import { ProductsService } from 'src/app/services/products.service';
import { MockProductService } from 'src/app/services/MockProductService';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let i: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [{ provide: ProductsService, useClass: MockProductService }, HttpClientModule, HttpClient, HttpHandler ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @Component({
  //   template: `</ProductComponent [product]="data">`
  // })

  // class TestHostComponent {
  //   data: IProduct = { 
  //     id: 19910811, 
  //     name: "Fanny", 
  //     description: "Jag är glad", 
  //     price: 123456789, 
  //     imageUrl: "string",
  //     year: 1991,
  //     productCategory: [
  //       { 
  //           category: null,
  //           categoryId: 11,
  //       }
  //     ]
  //   };
  // }

  // Testa namn (med mockdata)
  it("should be Fanny as name", () => {
    expect(component.product[0].name).toBe("Fanny");
  })

});
