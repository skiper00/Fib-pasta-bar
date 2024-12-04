import type {CartItem} from './cartItem'

export interface CartState {
    items:CartItem[],
    userId: string;
}