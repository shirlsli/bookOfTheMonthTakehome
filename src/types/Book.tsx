// all of the files in 'types' are interfaces to populate using my hardcoded JSON books and user
// technically these could all be in one file since this project is quite small in scope but would be a problem if the scope expands
export interface Book {
    id: number,
    title: string;
    author: string;
    coverImgPath: string;
    price: number;
}