import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CategoryComponent } from './category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],
      providers: [ CategoryComponent, HttpClientModule ],
      imports: [ HttpClientTestingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testa att det är en tom lista
  it("should be an empty list", () => {
    // Förbereda
    expect(component.showProduct).toEqual([]);

    // Agera
    component.showGenre;

    // Verifiera
    expect(component.showProduct).toEqual([]);
  })

});
