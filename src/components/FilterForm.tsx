import React from "react";
import { Book, Doc, QueryParams, User } from "../constants/Types";
import { Department, UserRole, Year } from "../constants/Enums";

const FilterForm: React.FC<{
    entityType: string,
    queryParams: Partial<QueryParams>,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleButtonClick: (offsetChange: number) => void
}> = ({ 
    entityType,
    queryParams,
    handleChange,
    handleSubmit,
    handleButtonClick
}) => {
    const tempBook: Book = {
        isbn: 0,
        title: "",
        author: "",
        publisher: "",
        language: "",
        department: Department.CS,
        dateReleased: new Date,
        edition: 0
    };

    const tempUser: User = {
        id: 0,
        username: "",
        email: "",
        role: UserRole.ADMIN,
        department: Department.CS,
        year: Year.FIRST_YEAR,
        docs: []
    };

    const tempDoc: Doc = {
        id: 0,
        title: "",
        owner: tempUser,
        department: Department.CS,
        year: Year.FIRST_YEAR,
        language: ""
    };
    
    const columns = (entityType === "Book" ?
        Object.keys(tempBook) :
        Object.keys(tempDoc)
    );

    //console.log(columns);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="filterByKey">Filter By:</label>
                    <select id="filterByKey" onChange={handleChange} value={queryParams.filterByKey}>
                        <option key = "" value = ""></option>
                        {columns.map((column) => (
                            <option key={column} value={column}>
                                {column}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        id="filterByValue"
                        onChange={handleChange}
                        value={queryParams.filterByValue}
                    />
                </div>
                <div>
                    <label htmlFor="sortBy">Sort By:</label>
                    <select id="sortBy" onChange={handleChange} value={queryParams.sortBy}>
                        <option key = "" value = ""></option>
                        {columns.map((column) => (
                            <option key={column} value={column}>
                                {column}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="sortOrder">Sort Order:</label>
                    <input
                        type="checkbox"
                        id="sortOrder"
                        onChange={handleChange}
                        checked={queryParams.sortOrder === "DESC"}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {queryParams.offset === 0 ? (
                    <button onClick={() => handleButtonClick(10)}>Next</button>
                ) : (
                    <div>
                        <button onClick={() => handleButtonClick(-10)}>Prev</button>
                        <button onClick={() => handleButtonClick(10)}>Next</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilterForm;
