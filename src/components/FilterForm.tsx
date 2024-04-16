import React, { useState } from "react";
import { Book, Doc, QueryParams } from "../constants/Types";
import GetEntitiesConnection from "../connections/GetEntitiesConnection";

const FilterForm: React.FC<string> = (entityType) => {
    const columns = (entityType === "Book" ?
        Object.keys({} as Book) :
        Object.keys({} as Doc)
    );

    const [queryParams, setQueryParams] = useState<QueryParams>({
        filterByKey: "",
        filterByValue: "",
        sortBy: "",
        sortOrder: "ASC",
        limit: 10,
        offset: 0
    });

    // const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement> = (e) => {
    //     const { id, value, checked, type } = e.target;
    //     setQueryParams(prevParams => ({
    //         ...prevParams,
    //         [id]: type === "checkbox" ? (checked ? "DESC" : "ASC") : value,
    //     }));
    // };
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement> = (e) => {
        const { id, value, type } = e.target;

        if (type === "checkbox") {
            setQueryParams(prevParams => ({
                ...prevParams,
                [id]: value === "on" ? "DESC" : "ASC", 
            }));
        } else {
            setQueryParams(prevParams => ({
                ...prevParams,
                [id]: value,
            }));
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        GetEntitiesConnection(entityType, queryParams);
    };

    const handleButtonClick = (offsetChange: number) => {
        setQueryParams(prevParams => ({
            ...prevParams,
            offset: prevParams.offset + offsetChange
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="filterByKey">Filter By:</label>
                    <select id="filterByKey" onChange={handleChange} value={queryParams.filterByKey}>
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


// import React, { useState } from "react";
// import { Book, Doc, QueryParams } from "../constants/Types";
// import GetEntitiesConnection from "../connections/GetEntitiesConnection";

// const FilterForm: React.FC<string> = (entityType: string) => {
//     const columns = (entityType === "Book" ?
//         Object.keys({} as Book) :
//         Object.keys({} as Doc)
//     );

//     //const paramKeys = Object.keys({} as QueryParams);
//     const [queryParams, setQueryParams] = useState<QueryParams>();

//     const handleChange: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setQueryParams({
//             ...queryParams,
//             [e.target.id]: e.target.value,
//         });
//     };

//     const handleSubmit: React.ReactEventHandler<HTMLElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         GetEntitiesConnection(entityType, queryParams as QueryParams);
//     }

//     return (
//         <div>
//             <form onSubmit = {handleSubmit}>
//                 {/* {paramKeys.map(key => {
//                     <div key = {key}>
//                         <label htmlFor = {key}>{key}</label>
//                         {typeof queryParams[key] === "string" || typeof queryParams[key] === "number"}
//                     </div>
//                 })} */}
//                 <div>
//                     <label htmlFor = "filterBy">Filter By:</label>
//                     <select id = "filterBy" onChange = {handleChange} value = {queryParams?.filterByKey}>
//                         {columns.map((column) => (
//                             <option key = {column} value = {column}>
//                                 {column}
//                             </option>
//                         ))}
//                     </select>
//                     <input type = "text" id = "filterByValue"
//                 </div>
//                 <div>
//                     <label htmlFor = "sortBy">Sort By:</label>
//                     <select id = "sortBy" onChange = {handleChange} value = {queryParams?.sortBy}>
//                         {columns.map((column) => (
//                             <option key = {column} value = {column}>
//                                 {column}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor = "sortOrder">Sort Order:</label>
//                     <input type = "checkbox" id = "sortOrder" onChange = {handleChange} checked = {queryParams?.sortOrder === "DESC"}/>
//                 </div>
//                 {/* <div>
//                     <label htmlFor = "limit">Limit:</label>
//                     <input type = "number" id = "limit" onChange = {handleChange} value = {queryParams?.limit}/> 
//                 </div>
//                 <div>
//                     <label htmlFor = "offset">Offset:</label>
//                     <input type = "number" id = "offset" onChange = {handleChange} value = {queryParams?.offset}/>
//                 </div> */}
//                 <button type = "submit">Submit</button>
//             </form>
//             <div>
//                 {if(queryParams?.offset === 0) {(
//                     <button onClick = {queryParams?.offset + 50}>Next</button>
//                 );} else {(
//                     <button onClick = {queryParams?.offset - 50}>Prev</button>
//                     <button onClick = {queryParams?.offset + 50}>Next</button>
//                 );}

//                 }
//             </div>
//         </div>
//     );
// }

// export default FilterForm;