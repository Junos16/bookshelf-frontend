import React from "react";

const FormExtra: React.FC = () => {
    return (
        <div>
            <div>
                <input
                    id = "remember-me"
                    name = "remember-me"
                    type = "checkbox"
                />
                <label htmlFor = "remember-me">
                    Remember me
                </label>
            </div>
            <div>
                <a href = "#">
                    Forgot your password?
                </a>
            </div>
        </div>
    );
}

export default FormExtra;