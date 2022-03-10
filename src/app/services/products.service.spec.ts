import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule ], 
      providers: [ ProductsService, HttpClientModule, HttpClient, HttpHandler ]});
      service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
