import { useState } from "react";
import { signupFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import Input from "./Input";
import SignupConnection from "../connections/SignupConnection";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
const fieldsState: Record<string | number | symbol, string> = {};
fields.forEach(field => fieldsState[field.id] = "");

const Signup = () => {
    const navigate = useNavigate();
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupState({
            ...signupState, 
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        SignupConnection(signupState); 
        navigate("/login");
    }

    return (
        <div>
            <form>
                <div>
                    {
                        fields.map(field => {
                            if (field.type === "select") {
                                return (
                                    <div key={field.id}>
                                        <label htmlFor={field.labelFor}>{field.labelText}</label>
                                        <select
                                            id={field.id}
                                            name={field.name}
                                            value={signupState[field.id]}
                                            onChange={handleChange}
                                            required={field.isRequired}
                                        >
                                            <option value="">Select {field.labelText}</option>
                                            {field.options?.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                );
                            } else {
                                return (
                                    <Input
                                        key={field.id}
                                        handleChange={handleChange}
                                        value={signupState[field.id]}
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
                        })
                    }

                </div>
                <FormAction handleSubmit = {handleSubmit} text = "Signup"/>
            </form>
        </div>
    );
}

export default Signup;


