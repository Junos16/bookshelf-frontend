import React from "react";
import { Book, Doc, User } from "../constants/Types";

const DetailsTable: React.FC<{ 
    entityType: string, 
    entity: Book | User | Doc
}> = ({
    entityType,
    entity
}) => {
    const rows = Object.keys(entity);

    return (
        <div className="mb-4">
            <h2 className="mt-4 mb-3 text-center text-4xl font-extrabold text-gray-200">{entityType} Details</h2>
            <div className="overflow-auto">
                <table className="overflow-y-auto text-gray-200 w-full border-collapse">
                    <tbody>
                        {rows.map((key) => {
                            if (key === "docs") {
                                return null;
                            } else {
                                const value = entity[key] as string;
                                return (
                                    <tr key={key} className="border-b border-gray-200">
                                        <td className="py-3 px-4 text-left">{key}</td>
                                        <td className="py-3 px-4 text-center">{value}</td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>

        // <div>
        //     <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-200">{entityType} Details</h2>
        //     <table className="text-gray-200 px-4 py-2 w-full">
        //         <tbody>
        //             {rows.map((key) => {
        //                 if (key === "docs") {
        //                     // console.log(key);
        //                     // console.log(typeof entity[key]);
        //                     return null; 
        //                 } else {
        //                     const value = entity[key] as string;
        //                     //console.log(key);
        //                     return (
        //                         <tr key={key}>
        //                             <td>{key}</td>
        //                             <td className="text-center">{value}</td>
        //                         </tr>
        //                     );
        //                 }
        //             })}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default DetailsTable;