import React from 'react';
import { Cart } from '../types/Cart';
import { BookComponent } from './book';

interface OrderProps {
    cart: Cart
    placeOrder: (cart: Cart) => void;
}

export const CheckoutPage: React.FC<OrderProps> = ({cart, placeOrder}) => {
    return (
        <div className="mx-auto max-w-5xl px-6 py-8">
            <h1 className="mb-6 font-serif text-4xl font-bold">This Month's Reads</h1>
            <div className="grid gap-8 md:grid-cols-[1fr_20rem]">
                <div>
                    <div className="flex flex-col divide-y divide-gray-200">
                        {cart.books.map((book) => {
                            return <BookComponent key={book.id} book={book}/>
                        })}
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-4 font-semibold text-gray-900">
                        <span>Total</span>
                        <span>{cart.total.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 self-start rounded-lg border border-gray-200 p-6 md:sticky md:top-8">
                    <div>
                        <h2 className="text-sm font-medium text-gray-500">Shipping Address</h2>
                        <p className="text-gray-900">{cart.user.address}</p>
                    </div>
                    <button onClick={() => placeOrder(cart)} className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

