import React from "react";

const Input: React.FC<{
    labelFor: string;
    labelText: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    name: string;
    type: string;
    isRequired?: boolean;
    fixedInputClass?: string;
    customClass?: string;
    placeholder?: string;
}> = ({
    labelFor,
    labelText,
    handleChange,
    value,
    id,
    name,
    type,
    isRequired = false,
    fixedInputClass = "",
    customClass = "",
    placeholder = ""
}) => {
    return (
        <div>
            <label htmlFor={labelFor}>{labelText}</label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={`${fixedInputClass} ${customClass}`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
