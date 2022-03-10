import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [SearchComponent, HttpClientModule ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
