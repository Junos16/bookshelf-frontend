import React from "react";
import { useNavigate } from "react-router-dom";

const Button: React.FC<{
    linkName: string,
    linkUrl?: string,
    func?: () => void,
    action?: "button" | "submit" | "reset" | undefined;
    customClass?: string,
}> = ({ linkName, linkUrl, action, func, customClass }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // if (linkUrl) navigate(linkUrl);
        // else if (func !== undefined) func();
        if (linkUrl) navigate(linkUrl);
        if (func) func();
    };

    return (
        <button 
            type = {action} 
            onClick = {handleClick}
            className = {customClass}
        >
            {linkName}
        </button>
    );
}

export default Button;