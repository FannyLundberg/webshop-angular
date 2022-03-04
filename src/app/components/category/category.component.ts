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
  productsShow: IProduct[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductsService) { }

  showGenre(id: number) {
    this.productsShow = [];

    this.product.forEach((p) => {
      for (let i = 0; i < p.productCategory.length; i++) {
        if (p.productCategory[i].categoryId === id) {
          this.productsShow.push(p);
        }
      }
    })
  }

  ngOnInit(): void {
    this.categoryService.categoryData$.subscribe((dataFromCategoryApi: ICategory[]) => {
      this.category = dataFromCategoryApi;
    })
    this.categoryService.getCategory();

    this.productService.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
    })
    this.productService.getProduct();
  }

}
