import React from "react";
import { QueryParams } from "../constants/Types";
import { tempBook, tempDoc } from "../constants/TempObjects";

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
    
    const columns = (entityType === "Book" ?
        Object.keys(tempBook) :
        Object.keys(tempDoc)
    );

    // const selectClass = "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm";
    // const inputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
    //console.log(columns);
    
    return (
        <div className="mb-2 text-gray-400 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
                <div className="flex items-center">
                    <label htmlFor="filterByKey" className="mr-2">Filter By:</label>
                    <select id="filterByKey" onChange={handleChange} value={queryParams.filterByKey} className="rounded-md px-2 py-1 border border-gray-300 text-sm">
                        <option key="" value=""></option>
                        {columns.map((column) => (
                            <option key={column} value={column}>
                                {column}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="filterByValue" className="mr-2">Filter Value:</label>
                    <input
                        type="text"
                        id="filterByValue"
                        onChange={handleChange}
                        value={queryParams.filterByValue}
                        className="rounded-md px-2 py-1 border border-gray-300 text-sm"
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="sortBy" className="mr-2">Sort By:</label>
                    <select id="sortBy" onChange={handleChange} value={queryParams.sortBy} className="rounded-md px-2 py-1 border border-gray-300 text-sm">
                        <option key="" value=""></option>
                        {columns.map((column) => (
                            <option key={column} value={column}>
                                {column}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="sortOrder" className="mr-2">Sort Order:</label>
                    <input
                        type="checkbox"
                        id="sortOrder"
                        onChange={handleChange}
                        checked={queryParams.sortOrder === "DESC"}
                        className="rounded-md border border-gray-300 text-sm"
                    />
                </div>
                <button type="submit" className="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-semibold rounded-md px-2 py-1 text-sm">Submit</button>
                <div className="items-center">
                    {queryParams.offset === 0 ? (
                        <button onClick={() => handleButtonClick(10)} className="transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-500 text-black font-semibold rounded-md px-2 py-1 text-sm">Next</button>
                    ) : (
                        <div className="flex">
                            <button onClick={() => handleButtonClick(-10)} className="transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-500 text-black font-semibold rounded-md px-2 py-1 mr-2 text-sm">Prev</button>
                            <button onClick={() => handleButtonClick(10)} className="transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-500 text-black font-semibold rounded-md px-2 py-1 text-sm">Next</button>
                        </div>
                    )}
                </div>
            </form>
        </div>

        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="filterByKey">Filter By:</label>
        //             <select id="filterByKey" onChange={handleChange} value={queryParams.filterByKey}>
        //                 <option key = "" value = ""></option>
        //                 {columns.map((column) => (
        //                     <option key={column} value={column}>
        //                         {column}
        //                     </option>
        //                 ))}
        //             </select>
        //             <input
        //                 type="text"
        //                 id="filterByValue"
        //                 onChange={handleChange}
        //                 value={queryParams.filterByValue}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="sortBy">Sort By:</label>
        //             <select id="sortBy" onChange={handleChange} value={queryParams.sortBy}>
        //                 <option key = "" value = ""></option>
        //                 {columns.map((column) => (
        //                     <option key={column} value={column}>
        //                         {column}
        //                     </option>
        //                 ))}
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="sortOrder">Sort Order:</label>
        //             <input
        //                 type="checkbox"
        //                 id="sortOrder"
        //                 onChange={handleChange}
        //                 checked={queryParams.sortOrder === "DESC"}  
        //             />
        //         </div>
        //         <button type="submit">Submit</button>
        //     </form>
        //     <div>
        //         {queryParams.offset === 0 ? (
        //             <button onClick={() => handleButtonClick(10)}>Next</button>
        //         ) : (
        //             <div>
        //                 <button onClick={() => handleButtonClick(-10)}>Prev</button>
        //                 <button onClick={() => handleButtonClick(10)}>Next</button>
        //             </div>
        //         )}
        //     </div>
        // </div>
    );
}

export default FilterForm;
