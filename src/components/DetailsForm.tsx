import React, { useState } from "react";
import { bookFields, docFields, loginFields, signupFields } from "../constants/FormFields";
import Input from "./Input";
import LoginConnection from "../connections/LoginConnection";
import SignupConnection from "../connections/SignupConnection";
import FormAction from "./FormAction";
import { useNavigate } from "react-router-dom";
import UpdateEntityConnection from "../connections/UpdateEntityConnection";
import CreateEntityConnection from "../connections/CreateEntityConnection";

const DetailsForm: React.FC<{ 
    fieldType: string,
    update?: typeof UpdateEntityConnection,
    create?: typeof CreateEntityConnection,
    id?: number
}> = ({ 
    fieldType,
    update,
    create,
    id 
}) => {
    
    const fields = (fieldType === "Book" ?
        bookFields : (fieldType === "Doc" ?
            docFields.filter(field => field.id !== "owner") : (fieldType === "Login" ?
                loginFields : signupFields
            )
        )
    );

    const initialState: Record<string, string> = {};
    fields.forEach(field => initialState[field.id] = "");

    const [fieldState, setFieldState] = useState(initialState);
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFieldState({
            ...fieldState,
            [id]: value
        });
    };

    const handleFileChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0] || null;
        setFile(uploadedFile);
    }

    const handleSubmit: React.ReactEventHandler<HTMLElement> = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (fieldType === "Book" || fieldType === "Doc") {
            if (create) create(fieldType, fieldState, file);
            else if (update && id) update(fieldType, fieldState, id, file);
            const nav = fieldType === "Book" ? "/" : "/profile";
            navigate(nav);
        }
        else if (fieldType === "User") {
            if (create) create(fieldType, fieldState);
            else if (update && id) update(fieldType, fieldState, id);
            navigate("/profile");
        }
        else if (fieldType === "Login") {
            e.preventDefault();
            await LoginConnection(fieldState);
            navigate("/")
        }
        else {
            e.preventDefault();
            await SignupConnection(fieldState);
            navigate("/login");
        }
    };

    return (
        <div className="text-gray-400">
            <form onSubmit={handleSubmit}>
                {fields.map(field => {
                    if (field.type === "select") {
                        return (
                            <div key={field.id}>
                                <label htmlFor={field.id}>{field.labelText}</label>
                                <select className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    id={field.id}
                                    name={field.name}
                                    value={fieldState[field.id]}
                                    onChange={handleChange}
                                    required={field.isRequired}
                                >
                                    <option value="">Select {field.labelText}</option>
                                    {field.options?.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        );
                    } else {
                        return (
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={fieldState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        );
                    }
                })}
                {(fieldType !== "Login" && fieldType !== "Signup" && fieldType !== "User") ?
                    <div className="mt-3">
                        <label htmlFor = "file">Upload File</label>
                        <input type = "file" name = "pdf" id = "file" onChange = {handleFileChange}/>
                    </div> : null
                }
                <FormAction handleSubmit = {handleSubmit} text = {fieldType !== "Login" && fieldType !== "Signup" ? `Update ${fieldType}` : fieldType}/>
            </form>
        </div>
    );
}

export default DetailsForm;

