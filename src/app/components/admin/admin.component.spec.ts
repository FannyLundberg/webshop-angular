import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let id: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      providers: [AdminComponent, HttpClientModule ],
      imports: [ HttpClientTestingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa att id kommer med vid tryck på "Ta bort order"
  it("should include Id when click Delete", () => {
    // Förbereda
    expect(component.deleteOrder).not;

    // Agera
    component.deleteOrder(id);

    // Verifiera
    expect(component.deleteOrder).toContain(id);
  })
});
