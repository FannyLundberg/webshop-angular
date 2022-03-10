import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ], 
      providers: [ OrderService, HttpClientModule, HttpClient, HttpHandler ]});
      service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
