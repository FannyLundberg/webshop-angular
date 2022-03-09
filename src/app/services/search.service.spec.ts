import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule ], 
      providers: [ SearchService, HttpClientModule, HttpClient, HttpHandler ]});
      service = TestBed.inject(SearchService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
