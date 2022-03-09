import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let categoryService: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    categoryService = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });
});
