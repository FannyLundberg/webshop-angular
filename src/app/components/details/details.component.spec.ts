import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [ DetailsComponent, HttpClientModule ],
      imports: [ RouterTestingModule, HttpClientTestingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa att id kommer med vid tryck på "Ta bort order"
  it("should have one product to show", () => {
    // Förbereda
    expect(component.productId).not;

    // Agera
    component.ngOnInit();

    // Verifiera
    expect(component.productId).toBe;
  })

});
