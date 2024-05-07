import { Book, User, Doc } from "./Types";
import { Department, UserRole, Year } from "./Enums";

export const tempBook: Book = {
    isbn: 0,
    title: "",
    author: "",
    publisher: "",
    language: "",
    department: Department.CS,
    dateReleased: new Date,
    edition: 0
};

export const tempUser: User = {
    id: 0,
    username: "",
    email: "",
    role: UserRole.ADMIN,
    department: Department.CS,
    year: Year.FIRST_YEAR,
    docs: []
};

export const tempDoc: Doc = {
    id: 0,
    title: "",
    // owner: tempUser,
    department: Department.CS,
    year: Year.FIRST_YEAR,
    language: ""
};