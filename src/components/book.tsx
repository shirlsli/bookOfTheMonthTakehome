import React from 'react';
import { Book } from '../types/Book';

interface BookProps {
    book: Book;
}

// made each book a component so that they can be neatly populated onto the checkout page
export const BookComponent: React.FC<BookProps> = ({ book }) => {
    return (
        <div className="flex w-full items-center gap-4 py-4 select-none">
            <img src={book.coverImgPath} alt={`Cover of ${book.title}`} draggable={false} className="aspect-[2/3] w-20 flex-none rounded object-cover shadow-sm"/>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="truncate font-serif font-semibold text-gray-900">{book.title}</p>
                <p className="truncate font-serif text-gray-900">{book.author}</p>
            </div>
            <p className="flex-none font-semibold text-gray-900">
                {book.price.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
            </p>
        </div>

    )
}