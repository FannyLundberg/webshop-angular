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
  showProduct: IProduct[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductsService) { }

  ngOnInit(): void {
    // Kategori
    this.categoryService.categoryData$.subscribe((dataFromCategoryApi: ICategory[]) => {
      this.category = dataFromCategoryApi;
    })
    this.categoryService.getCategory();

    // Alla produkter
    this.productService.productData$.subscribe((dataFromProductApi: IProduct[]) => {
      this.product = dataFromProductApi;
    })
    this.productService.getProduct();
  }

  // Körs vid klick på en genre
  showGenre(id: number) {
    // Tömma listan för att kunna skapa en ny beroende på vilken genre man tryckt på
    this.showProduct = [];

    // Kontrollera vilka produkter som är aktuella för vald genre, pusha till lista
    this.product.forEach((p) => {
      for (let i = 0; i < p.productCategory.length; i++) {
        if (p.productCategory[i].categoryId === id) {
          this.showProduct.push(p);
        }
      }
    })
  }

}
