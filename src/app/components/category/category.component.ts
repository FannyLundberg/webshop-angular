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
  thriller = false;
  comedy = false;
  sciFi = false;
  section = document.getElementById("sectionProductsGenre")?.innerText;
  productsShow: IProduct[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductsService) { }

  showGenre(id: number) {
    this.productsShow = [];
    console.log(this.productsShow);
    console.log(this.product);
    console.log(this.category);

    for (let u = 0; u < this.product.length; u++) {
      console.log(this.product[u].productCategory);
      for (let i = 0; i < this.category.length; i++) {
        // if (this.product.productCategory[u].categoryId === id) {
        //   this.productsShow.push(p);
          
          console.log(this.product[u].productCategory[i].categoryId)
        }
      }
    // }
    //)
  }

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

  // showAction() {
  //   this.section = "";
  //   this.action = true;

  //   // for (let i = 0; i < this.product.length; i++) {
  //   //   if (this.product[0].productCategory[0].categoryId == 5) {
  //   //     console.log()
  //   //   }
  //   // }

  //   // this.product.forEach(p => {
  //   //   console.log(p);
  //   //   if (this.product.productCategory.categoryId == 5) {
  //   //     console.log(p)
  //   //   }
  //   // });
  // }

  // showThriller() {
  //   this.section = "";
  //   this.thriller = true;
  // }

  // showComedy() {
  //   this.section = "";
  //   this.comedy = true;
  // }

  // showSciFi() {
  //   this.section = "";
  //   this.sciFi = true;
  // }



  


  // showGenre(i: number) {
  //   console.log(i); 
    
  //   this.product.forEach(element => {
  //     console.log(element)

      // let productGenre = this.productGenre[i].categoryId;

      // if (element.productCategory[i].categoryId = 5) {
      //   this.genreAction.push(this.productGenre)
      //   console.log(this.genreAction);

      // } if (element.productCategory[i].categoryId = 6) {
      //   this.genreThriller.push(productGenre)
      //   console.log(this.genreThriller);

      // } if (element.productCategory[i].categoryId = 7) {
      //   this.genreComedy.push(productGenre)
      //   console.log(this.genreComedy);

      // } if (element.productCategory[i].categoryId = 8) {
      //   this.genreSciFi.push(productGenre)
      //   console.log(this.genreSciFi);
      // } else {
      //   console.log("Hejbarberiba");
      // }

  //   });
  // }

  // showGenre() {
    
  //   for (let i = 0; i < this.category.length; i++) {

  //     let genreAction = this.category[i].id;
  //     let productGenre = this.product[i].productCategory[i];

  //     console.log(genreAction);
  //     console.log(productGenre);
    
  //     if (genreAction == productGenre.categoryId) {
  //       console.log("Hej");
  //     } if (this.category[0].id == 5) {
  //         console.log("Hej Action");
  //     } if (this.category[0].id == 6) {
  //       console.log("Hej Thriller");
  //     } if (this.category[0].id == 7) {
  //       console.log("Hej Komedi");
  //     } if (this.category[0].id == 8) {
  //       console.log("Hej Sci-fi");
  //     }
  //   }

  // //   }
  //   // *****************************************************
  //   // *****************************************************
  // // om detta inte funkar - ta bort models-filen för IPorductGenre
  //   // for (let i = 0; i < this.product.length; i++) {

  //   //   let genreAction = this.category[0].id;
  //   //   let productGenre = this.productGenre[0].categoryId;

  //   //   console.log(genreAction);
  //   //   console.log(productGenre);
  //   // }

  //   // *****************************************************
  //   // *****************************************************

  //   // if (this.category[0].id && this.productGenre[0].categoryId == 5) {
  //   //   console.log("Action");
      
  //   // }

  //   // *****************************************************
  //   // *****************************************************
    
  // //   for (let i = 0; i < this.product.length; i++) {
      
  // //     let genreProduct = this.product[i];
  // //     console.log(this.product.length);
  // //     console.log(genreProduct);

  // //     if (this.product[i].productCategory[i].categoryId == 5) {
  // //       this.genreAction.push(genreProduct)
  // //       console.log(this.product[i].productCategory[i].categoryId)
  // //       console.log(this.genreAction);

  // //     } if (this.product[i].productCategory[i].categoryId == 6) {
  // //       this.genreThriller.push(genreProduct)
  // //       console.log(this.product[i].productCategory[i].categoryId)
  // //       console.log(this.genreThriller);

  // //     } if (this.product[i].productCategory[i].categoryId == 6) {
  // //       this.genreComedy.push(genreProduct)
  // //       console.log(this.genreComedy);

  // //     } if (this.product[i].productCategory[i].categoryId == 6) {
  // //       this.genreSciFi.push(genreProduct)
  // //       console.log(this.genreSciFi);
  // //     }
  // //   }
  // //   this.action = true;
  // //   console.log(this.genreAction);
    
    
  // }

  // showAction() {
  //   this.action = true;
  // }


}
