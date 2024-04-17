import React from "react";

const Navbar: React.FC<{
    onSelectEntity: (entity: string) => void
}> = ({ onSelectEntity }) => {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick = {
                        () => onSelectEntity("Book")
                    }>Books</button>
                </li>
                <li>
                    <button onClick = {
                        () => onSelectEntity("Documents")
                    }>Documents</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;