import React from 'react';
import { Cart } from '../types/Cart';
import { BookComponent } from './book';

interface OrderProps {
    cart: Cart
    placeOrder: (cart: Cart) => void;
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
            <button onClick={() => placeOrder(cart)}>Place Order</button>
        </>
    )
}

