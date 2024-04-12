import { useState } from "react";
import { signupFields } from "../Constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
const fieldsState: Record<string | number | symbol, string> = {};
fields.forEach(field => fieldsState[field.id] = "");

const Signup = () => {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupState({
            ...signupState, 
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        //authenticateUser();
    }

    return (
        <div>
            <form>
                <div>
                    {
                        fields.map(field =>
                            <Input
                                key = {field.id}
                                handleChange = {handleChange}
                                value = {signupState[field.id]}
                                labelText = {field.labelText}
                                labelFor = {field.labelFor}
                                id = {field.id}
                                name = {field.name}
                                type = {field.type}
                                isRequired = {field.isRequired}
                                placeholder = {field.placeholder}
                            />
                        )
                    }
                </div>
                <FormAction handleSubmit = {handleSubmit} text = "Login"/>
            </form>
        </div>
    );
}

export default Signup;


