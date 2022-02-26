import { Observable } from "rxjs";
import { IProduct } from "./IProduct";
// import { IProducts } from "./IProducts";

export interface IProductData {
    
    products: IProduct[];

    // getProduct(data: string): Observable<IProduct[]>;
}