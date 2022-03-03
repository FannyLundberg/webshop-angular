import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: ICategory[] = [];
  product: IProduct[] = [];
  action = false;
  genreAction: string = "";

  constructor(private categoryService: CategoryService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.categoryService.categoryData$.subscribe((dataFromCategoryApi: ICategory[]) => {
      this.category = dataFromCategoryApi;
    })
    this.categoryService.getCategory();
    console.log(this.category);

    this.productService.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
    })
    this.productService.getProduct();
  }

  showGenre() {
    console.log("Visa genre");
    
    // let genreAction = this.category[0].name;
    // console.log(genreAction);
    
  //   if (this.category[0].id == 5 && this.product[0].productCategory[0].categoryId) {
  //     console.log("Hej Action");
  //   } if (this.category[0].id == 6) {
  //     console.log("Hej Thriller");
  //   } if (this.category[0].id == 7) {
  //     console.log("Hej Komedi");
  //   } if (this.category[0].id == 8) {
  //     console.log("Hej Sci-fi");
  //   }
  }

}
