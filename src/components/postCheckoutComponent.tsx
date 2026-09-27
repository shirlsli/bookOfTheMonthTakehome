import React from 'react';
import { ConfirmationMessage } from '../utils/placeOrder';
import { ErrorMessage } from '../utils/placeOrder';

interface ResponseProps {
    response: ConfirmationMessage | ErrorMessage;
    onBack: () => void;
}

export const PostCheckoutComponent: React.FC<ResponseProps> = ({ response, onBack }) => {
    if ('error' in response) {
        return (
            <>
                <h1>Oh no, something went wrong!</h1>
                <p>{'Your order was unable to be placed. Please try again in a bit.'}</p>
                <button onClick={onBack}>Back</button>
            </>
        )
    }
    return (
        <>
            <h1>Thanks for reading with us, see you next month!</h1>
            <p>Order ID: {response.orderId}</p>
            <p>Estimated Ship Date: {new Date(response.estimatedShipDate).toLocaleDateString(undefined, { timeZone: 'UTC' })}</p>
        </>
    )
}