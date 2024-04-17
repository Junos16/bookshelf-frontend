import React from "react";
import { useNavigate } from "react-router-dom";

const Button: React.FC<{
    linkName: string,
    linkUrl?: string,
    func?: () => void
}> = ({ linkName, linkUrl, func }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkUrl) navigate(linkUrl);
        else if (func !== undefined) func();
    };

    return (
        <button type = "button" onClick = {handleClick}>
            {linkName}
        </button>
    );
}

export default Button;