import { Department, Year } from "./enums"

const loginFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Username"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
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
        placeholder: "Username"
    },
    {
        labelText: "Email Address",
        labelFor: "email-address",
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email Address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-passsword",
        isRequired: true,
        placeholder: "Password"
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

export {loginFields, signupFields}