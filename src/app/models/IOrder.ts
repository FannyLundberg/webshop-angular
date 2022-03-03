export interface IOrder {
    id: number;
    companyId: 30;
    created: Date;
    createdBy: string;
    paymentMethod: "Paypal";
    totalPrice: number;
    status: number;
    orderRows: [
        { 
            id: number,
            productId: number,
            product: null,
            amount: number,
            orderId: number
        }
    ]
}