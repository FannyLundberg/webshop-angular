import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/IProduct';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = new Subject<string>();
  searchProduct: Observable<IProduct[]> = new Observable();

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    // Sökfunktion
    this.searchProduct = this.search.pipe(
      // Vänta millisekunder innan sök påbörjas
      debounceTime(500),
      // Vänta antal millisekunder och gör check om något ändrats
      distinctUntilChanged(),
      // Måste vara fler än ett tecken
      filter((searchFromUser: string) => searchFromUser.length > 1),
      // Har något ändrats görs sök
      switchMap((searchFromUser) => {
        return this.service.searchProduct(searchFromUser)
      })
    );
  }

  // Koppla ihop med tjänsten
  inputText(textInput: string) {
    this.search.next(textInput);
  }

}
