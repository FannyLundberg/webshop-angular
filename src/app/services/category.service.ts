import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryData = new Subject<ICategory[]>();
  categoryData$ = this.categoryData.asObservable();

  constructor(private http: HttpClient) { }

  // Hämta data från API
  getCategory() {
    this.http
    .get<ICategory[]>(environment.categoryURL)
    .subscribe((dataFromCategoryApi) => {
      this.categoryData.next(dataFromCategoryApi);
    })
  }

}
