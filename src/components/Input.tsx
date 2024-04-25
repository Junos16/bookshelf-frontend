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
    customClass = "",
    placeholder = ""
}) => {
    const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
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
