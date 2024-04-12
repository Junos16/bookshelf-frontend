import React from "react";
import { Link } from "react-router-dom"

const Header: React.FC<{
    heading: string;
    paragraph: string;
    linkName: string;
    linkUrl: string;
}> = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
    return (
        <div>
            <h2>{heading}</h2>
            <p>
                {paragraph} {" "}
                <Link to = {linkUrl}>
                    {linkName}
                </Link>
            </p>
        </div>
    );
}

export default Header;