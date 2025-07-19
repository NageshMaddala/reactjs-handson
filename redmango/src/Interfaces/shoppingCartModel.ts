import CartItemModel from "./cartItemModel";

export default interface shoppingCartModel {
    id: number;
    userId: string;
    cartItems: CartItemModel[];
    cartTotal: number;
    stripePaymentIntentId?: any;
    clientSecret?: any;
}