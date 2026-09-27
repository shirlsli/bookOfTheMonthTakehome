import React from 'react';
import { ConfirmationMessage } from '../utils/placeOrder';
import { ErrorMessage } from '../utils/placeOrder';

interface ResponseProps {
    response: ConfirmationMessage | ErrorMessage;
    onBack: () => void;
}

// would add a link to the browse books page in case the user wants to checkout more books, but that doesn't exist in the scope of this takehome
// using very simple Tailwind CSS since there were no specifications
export const PostCheckoutComponent: React.FC<ResponseProps> = ({ response, onBack }) => {
    if ('error' in response) {
        return (
            <div className="mx-auto max-w-5xl px-6 py-8">
                <h1 className="mb-6 font-serif text-4xl font-bold">Oh no, something went wrong!</h1>
                <p>{'Your order was unable to be placed. Please try again in a bit.'}</p>
                <button onClick={onBack} className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700">Back</button>
            </div>
        )
    }
    return (
        <div className="mx-auto max-w-5xl px-6 py-8">
            <h1 className="mb-6 font-serif text-4xl font-bold">Thanks for reading with us!</h1>
            <p className="truncate font-serif font-semibold text-gray-900">Order ID: {response.orderId}</p>
            <p className="truncate font-serif font-semibold text-gray-900">Estimated Ship Date: {new Date(response.estimatedShipDate).toLocaleDateString(undefined, { timeZone: 'UTC' })}</p>
            <a href="https://www.bookofthemonth.com/" className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700">
                See September's Books
            </a>
        </div>
    )
}