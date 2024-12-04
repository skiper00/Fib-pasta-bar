import { CategoryId } from "./category";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    categories_id: CategoryId;
}



