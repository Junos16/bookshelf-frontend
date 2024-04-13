import React from "react";
import { useNavigate } from "react-router-dom";

const Button: React.FC<{
    linkName: string;
    linkUrl: string;
}> = ({linkName, linkUrl}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(linkUrl);
    };

    return (
        <button type = "button" onClick = {handleClick}>
            {linkName}
        </button>
    );
}

export default Button;