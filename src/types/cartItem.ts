import type { Product } from "./product";

export interface CartItem {
    userId: string;    
    productId: string; 
    quantity: number;  
    price: number;     
    totalPrice: number;
    cartItemId: string;
    category?: string;
    product?: Product;
}