import { Department, UserRole, Year } from "./enums";

export class Book {
    isbn!: number;
    title!: string;
    author!: string;
    publisher!: string;
    language!: string;
    department!: Department;
    dateReleased!: Date;
    edition!: number;
}

export class Doc {
    id!: number;
    title!: string;
    owner!: User;
    department!: Department;
    year!: Year;
    language!: string;
}

export class User {
    id!: number;
    username!: string;
    email!: string;
    role!: UserRole;
    department!: Department;
    year!: Year;
    docs!: Doc[];
}