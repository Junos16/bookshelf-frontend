import { Department, Year } from "./Enums"

const bookFields = [
    {
        labelText: "ISBN",
        labelFor: "isbn",
        id: "isbn",
        name: "isbn",
        type: "number",
        autoComplete: "isbn",
        isRequired: true,
        placeholder: "ISBN",
        options: []
    },
    {
        labelText: "Title",
        labelFor: "title",
        id: "title",
        name: "title",
        type: "text",
        autoComplete: "title",
        isRequired: true,
        placeholder: "Title",
        options: []
    },
    {
        labelText: "Author",
        labelFor: "author",
        id: "author",
        name: "author",
        type: "text",
        autoComplete: "author",
        isRequired: true,
        placeholder: "Author",
        options: []
    },
    {
        labelText: "Publisher",
        labelFor: "publisher",
        id: "publisher",
        name: "publisher",
        type: "text",
        autoComplete: "publisher",
        isRequired: true,
        placeholder: "Publisher",
        options: []
    },
    {
        labelText: "Language",
        labelFor: "language",
        id: "language",
        name: "language",
        type: "text",
        autoComplete: "language",
        isRequired: true,
        placeholder: "Language",
        options: []
    },
    {
        labelText: "Department",
        labelFor: "department",
        id: "department",
        name: "department",
        type: "select",
        isRequired: true,
        options: Object.values(Department)
    },
    {
        labelText: "Date Released",
        labelFor: "dateReleased",
        id: "dateReleased",
        name: "dateReleased",
        type: "date",
        isRequired: true,
        placeholder: "Date Released",
        options: []
    },
    {
        labelText: "Edition",
        labelFor: "edition",
        id: "edition",
        name: "edition",
        type: "number",
        autoComplete: "edition",
        isRequired: true,
        placeholder: "Edition",
        options: []
    }
];

const docFields = [
    {
        labelText: "Title",
        labelFor: "title",
        id: "title",
        name: "title",
        type: "text",
        autoComplete: "title",
        isRequired: true,
        placeholder: "Title",
        options: []
    },
    // {
    //     labelText: "Owner",
    //     labelFor: "owner",
    //     id: "owner",
    //     name: "owner",
    //     type: "text",
    //     autoComplete: "owner",
    //     isRequired: true,
    //     placeholder: "Owner",
    //     options: []
    // },
    {
        labelText: "Department",
        labelFor: "department",
        id: "department",
        name: "department",
        type: "select",
        isRequired: true,
        options: Object.values(Department)
    },
    {
        labelText: "Year",
        labelFor: "year",
        id: "year",
        name: "year",
        type: "select",
        isRequired: true,
        options: Object.values(Year).filter(value => typeof value === "number")
    },
    {
        labelText: "Language",
        labelFor: "language",
        id: "language",
        name: "language",
        type: "text",
        autoComplete: "language",
        isRequired: true,
        placeholder: "Language",
        options: []
    }
];

const loginFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username",
        options: []
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password",
        options: []
    }
]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username",
        options: []
    },
    {
        labelText: "Email Address",
        labelFor: "email-address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email Address",
        options: []
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-passsword",
        isRequired: true,
        placeholder: "Password",
        options: []
    },
    
    {
        labelText: "Department",
        labelFor: "department",
        id: "department",
        name: "department",
        type: "select",
        isRequired: true,
        options: Object.values(Department)
    },
    
    {
        labelText: "Year",
        labelFor: "year",
        id: "year",
        name: "year",
        type: "select",
        isRequired: true,
        options: Object.values(Year).filter(value => typeof value === "number")
    }
]

export { bookFields, docFields, loginFields, signupFields }