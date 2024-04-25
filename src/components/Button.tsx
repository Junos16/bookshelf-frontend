import React from "react";
import { useNavigate } from "react-router-dom";

const Button: React.FC<{
    linkName: string,
    linkUrl?: string,
    func?: () => void
}> = ({ linkName, linkUrl, func }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // if (linkUrl) navigate(linkUrl);
        // else if (func !== undefined) func();
        if (linkUrl) navigate(linkUrl);
        if (func) func();
    };

    return (
        <button 
            type = "button" 
            onClick = {handleClick}
            className = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        >
            {linkName}
        </button>
    );
}

export default Button;