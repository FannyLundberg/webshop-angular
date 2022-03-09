import { Observable } from "rxjs";
import { IProduct } from "../models/IProduct";

export interface IProductService {
    productData$: Observable<IProduct[]>;

    getProduct(): void;
}