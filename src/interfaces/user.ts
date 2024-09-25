import {Book} from './book';

export interface User {
    id?: string;
    name: string;
    password: string;
    books?: Book[];
}