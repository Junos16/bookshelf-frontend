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
        <div>
            <h2>{entityType} Details</h2>
            <table>
                <tbody>
                    {rows.map((key) => {
                        if (key === "docs") {
                            // console.log(key);
                            // console.log(typeof entity[key]);
                            return null; 
                        } else {
                            const value = entity[key] as string;
                            //console.log(key);
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DetailsTable;