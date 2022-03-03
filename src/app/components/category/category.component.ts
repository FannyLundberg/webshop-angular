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
  genreAction: any[] = [];
  genreThriller: any[] = [];
  genreComedy: any[] = [];
  genreSciFi: any[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.categoryService.categoryData$.subscribe((dataFromCategoryApi: ICategory[]) => {
      this.category = dataFromCategoryApi;
    })
    this.categoryService.getCategory();
    // console.log(this.category);

    this.productService.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
    })
    this.productService.getProduct();
  }

  showGenre() {
    
  //   for (let i = 0; i < this.category.length; i++) {

  //     let genreAction = this.category[i].id;
  //     let productGenre = this.product[i].productCategory[i];

  //     console.log(genreAction);
  //     console.log(productGenre);
    
  //     if (genreAction == productGenre[0].categoryId) {
  //       console.log("Hej Action");
  //     } if (this.category[0].id == 6) {
  //       console.log("Hej Thriller");
  //     } if (this.category[0].id == 7) {
  //       console.log("Hej Komedi");
  //     } if (this.category[0].id == 8) {
  //       console.log("Hej Sci-fi");
  //     }

  //   }
    // *****************************************************
    // *****************************************************
  // om detta inte funkar - ta bort models-filen för IPorductGenre
    // for (let i = 0; i < this.product.length; i++) {

    //   let genreAction = this.category[0].id;
    //   let productGenre = this.productGenre[0].categoryId;

    //   console.log(genreAction);
    //   console.log(productGenre);
    // }

    // *****************************************************
    // *****************************************************

    // if (this.category[0].id && this.productGenre[0].categoryId == 5) {
    //   console.log("Action");
      
    // }

    // *****************************************************
    // *****************************************************
    
    for (let i = 0; i < this.product.length; i++) {
      
      let genreProduct = this.product[i];
      console.log(this.product.length);
      

      if (this.product[i].productCategory[i].categoryId == 5) {
        this.genreAction.push(genreProduct)
        console.log(this.product[i].productCategory[i].categoryId)
        console.log(this.genreAction);

      } if (this.product[i].productCategory[i].categoryId == 6) {
        this.genreThriller.push(genreProduct)
        console.log(this.product[i].productCategory[i].categoryId)
        console.log(this.genreThriller);

      } if (this.product[i].productCategory[i].categoryId == 6) {
        this.genreComedy.push(genreProduct)
        console.log(this.genreComedy);

      } if (this.product[i].productCategory[i].categoryId == 6) {
        this.genreSciFi.push(genreProduct)
        console.log(this.genreSciFi);
      }
    }

  }


}
