import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let categoryService: CategoryService;
  // HttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule ], 
      providers: [ CategoryService, HttpClientModule, HttpClient, HttpHandler ]});
      categoryService = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });
});
