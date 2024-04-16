import { Department, Year } from "../constants/enums";
import { Book, Doc, User } from "../constants/Types";
import React from "react";

type BookDocValue = string | number | Date | Department | Year | User | Doc[];

const Table: React.FC<Book[] | Doc[]> = (list) => {
    const keys = Object.keys(list[0] || {}) as (keyof Book | keyof Doc)[];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {keys.map(key => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            {keys.map(key => (
                                <td key={key}>
                                    {(item as Record<string, BookDocValue>)[key].toString()}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;


// import { Book, Doc } from "../constants/Types";
// import React from "react";

// //type bookDocKeyType = keyof Book | keyof Doc;

// const Table: React.FC<{list: Book[] | Doc[]}> = ({ list }) => {
//     const keys = Object.keys(list[0]);
    
//     return (
//         <div>
//         <table>
//             <thead>
//                 <tr>
//                     {keys.map(key => (
//                         <th key = {key}>{key}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {list.map((item, index) => (
//                     <tr key = {index}>
//                         {keys.map(key => (
//                             <td key = {key}>
//                                 {/* {(item as Book).isbn !== undefined ? (item as Book)[key] : (item as Doc)[key]} */}
//                                 {item[key]}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </div>
//     )
// }

// export default Table;