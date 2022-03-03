export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number; 
    imageUrl: string;
    year: number;
    productCategory: [
        { 
            category: null;
            categoryId: number;
        }
    ]
};