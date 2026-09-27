import React from 'react';
import { Cart } from '../types/Cart';
import { BookComponent } from './book';

interface OrderProps {
    cart: Cart
    placeOrder: () => void;
}

interface ConfirmationMessage {
    orderId: string;
    shipDate: string;
}

export const CheckoutPage: React.FC<OrderProps> = ({cart, placeOrder}) => {
    return (
        <>
            <h1>Order</h1>
            {cart.books.map((book) => {
                return <BookComponent key={book.title} book={book}/>
            })}
            <h2>Order Total: {cart.total}</h2>
            <p>Shipping Address: {cart.user.address}</p>
            <button>Place Order</button>
        </>
    )
}

