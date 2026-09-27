import React from 'react';
import { Book } from '../types/Book';

interface BookProps {
    book: Book;
}

export const BookComponent: React.FC<BookProps> = ({ book }) => {
    return (
        <>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <img src={book.coverImgPath} />
            <p>Price: {book.price}</p>
        </>
    )
}