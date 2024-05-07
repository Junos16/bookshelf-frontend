import { Department, UserRole, Year } from "./Enums";

interface templateInterface {
    [key: string]: string | number | Date | Department | Year | User | Doc[];
}

export interface QueryParams extends templateInterface {
    filterByKey: string;
    filterByValue: string;
    sortBy: string;
    sortOrder: "DESC" | "ASC";
    limit: number;
    offset: number;
}

export interface Book extends templateInterface {
    isbn: number;
    title: string;
    author: string;
    publisher: string;
    language: string;
    department: Department;
    dateReleased: Date;
    edition: number;
}

export interface Doc extends templateInterface {
    id: number;
    title: string;
    // owner: User;
    department: Department;
    year: Year;
    language: string;
}

export interface User extends templateInterface {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    department: Department;
    year: Year;
    docs: Doc[];
}