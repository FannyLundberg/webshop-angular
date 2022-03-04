import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  product: IProduct[] = [];

  constructor(private http: HttpClient) { }

  searchProduct(search: string): Observable<IProduct[]> {
    return this.http
    .get<IProduct[]>(environment.searchURL + "?=" + search)
    .pipe(map((searchData: IProduct[]) => searchData));
  }

}
