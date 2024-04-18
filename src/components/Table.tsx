import React from "react";
import { tempBook, tempDoc } from "../constants/TempObjects";
import { Book, Doc } from "../constants/Types";

const Table: React.FC<{ list: Book[] | Doc[] }> = ({ list }) => {
    if (!list || list.length === 0) {
        return (
            <div>
                <p>No data available</p>
            </div>
        );
    }
    
    const entity = Array.isArray(list) && list[0].isbn ? "Book" : "Doc";
    const tempEntity = entity === "Book" ? tempBook : tempDoc;
    const columns = Object.keys(tempEntity);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            {columns.map((key) => (
                                <td key={key}>{item[key as keyof Book | keyof Doc] as string}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

// import { Department, Year } from "../constants/Enums";
// import { Book, Doc, User } from "../constants/Types";
// import React from "react";

// type BookDocValue = string | number | Date | Department | Year | User | Doc[];

// const Table: React.FC<{list: Book[] | Doc[]}> = ({ list }) => {
//     const keys = Object.keys(list[0] || {}) as (keyof Book | keyof Doc)[];

//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         {keys.map(key => (
//                             <th key={key}>{key}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {list.map((item, index) => (
//                         <tr key={index}>
//                             {keys.map(key => (
//                                 <td key={key}>
//                                     {(item as Record<string, BookDocValue>)[key].toString()}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;
