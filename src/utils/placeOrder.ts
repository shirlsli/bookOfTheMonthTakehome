import { Cart } from "../types/Cart";

export interface ConfirmationMessage {
    orderId: string;
    estimatedShipDate: string;
}

export interface ErrorMessage {
    error: string;
}

export const placeOrder = async (cart: Cart): Promise<ConfirmationMessage | ErrorMessage> => {
    try {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // would also add api key variable irl but this is a mock api endpoint
            },
            body: JSON.stringify({ bookIds: cart.books.map((book) => book.id)})
        });
        if (!response.ok) {
            const error: ErrorMessage = await response.json()
            return error;
        }
        const confirmation: ConfirmationMessage = await response.json();
        return confirmation;
    } catch (error) {
        return { error: 'Order was unable to be placed.'}
    }
}