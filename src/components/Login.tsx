import { useState } from "react";
import { loginFields } from "../Constants/FormFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const fields = loginFields;
const fieldsState: Record<string | number | symbol, string>= {};
fields.forEach(field => fieldsState[field.id] = "");

const Login = () => {
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({
            ...loginState, 
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
                                value = {loginState[field.id]}
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
                <FormExtra/>
                <FormAction handleSubmit = {handleSubmit} text = "Login"/>
            </form>
        </div>
    );
}

export default Login;

// import axios from "axios";
// import React, { useState } from "react";

// const Login: React.FC = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""
//     });

//     const [error, setError] = useState(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prevState=> ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:4000/auth/login", formData);
//             console.log("Login successful:", response.data);
//         } catch(error) {
//             console.error("Login Failed:", error.response.data);
//             setError(error.response.data.message);
//         }
//     };
    
//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit = {handleSubmit}>
//                 <label><b>Username:</b></label>
//                 <input type = "text" id = "username" name = "username" value = {formData.username} onChange = {handleChange} />
//                 <label><b>Password:</b></label>
//                 <input type = "password" id = "password" name = "password" value = {formData.password} onChange = {handleChange} />
//                 <button type = "submit">Submit</button>
//             </form>

//         </div>
//     );
// };

// export default Login;