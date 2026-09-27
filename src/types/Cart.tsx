import { User } from './User';
import { Book } from './Book';

export interface Cart {
    user: User;
    books: Book[];
    total: number;
}