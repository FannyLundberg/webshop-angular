import { Observable, Subject } from "rxjs";
import { IProduct } from "../models/IProduct";
import { IProductService } from "./IProductService";

export class MockProductService implements IProductService {
    
    private productData = new Subject<IProduct[]>();
    public productData$: Observable<IProduct[]> = this.productData.asObservable();


    private mockData: IProduct[] = [
        {
            id: 19910811,
            name: "Fanny",
            description: "Jag är glad",
            price: 123456789, 
            imageUrl: "string",
            year: 1991,
            productCategory: 
            [
                { 
                    category: null,
                    categoryId: 11,
                }
            ]
        }
    ];
    
    getProduct(): void {
        this.productData.next(this.mockData)
    }

}