import React from "react";

const Navbar: React.FC<{
    options: string[]
    onSelectEntity: (entity: string) => void
}> = ({ options, onSelectEntity }) => {
    return (
        <nav>
            <ul>
                {options.map(option => {
                    return (
                        <li key = {option}>
                            <button onClick={
                                () => onSelectEntity(option)
                            }>{option}</button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;