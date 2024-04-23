import React from "react";
import { tempBook, tempDoc, tempUser } from "../constants/TempObjects";
import { Book, Doc, User } from "../constants/Types";
import Button from "./Button";
import DownloadConnection from "../connections/DownloadConnection";
import DeleteEntityConnection from "../connections/DeleteEntityConnection";

const Table: React.FC<{ 
    list: Book[] | Doc[] | User[],
    download: boolean,
    update: boolean,
    del: boolean
}> = ({ list, download, update, del }) => {
    if (!list || list.length === 0) {
        return (
            <div>
                <p>No data available</p>
            </div>
        );
    }
    
    const entityType = Array.isArray(list) && list[0].isbn ? "Book" : (list[0].password ? "User" : "Doc");
    const tempEntity = entityType === "Book" ? tempBook : (entityType === "Doc" ? tempDoc : tempUser);
    const columns = Object.keys(tempEntity);

    const handleDownload = (id: number) => {
        DownloadConnection(entityType, id);
    }   

    const handleDelete = (id: number) => {
        DeleteEntityConnection(entityType, id);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                        {download ? <th>Download</th> : null}
                        {update ? <th>Update</th> : null}
                        {del ? <th>Delete</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            {columns.map((key) => (
                                <td key={key}>{item[key as keyof Book | keyof Doc] as string}</td>
                            ))}
                            <td>
                                {download ? 
                                    <Button 
                                        linkName = "Download"
                                        func = {() => handleDownload(parseInt(entityType === "Book" ? item.isbn as string : item.id as string))}
                                    /> 
                                    : null}
                            </td>
                            <td>
                                {update ? 
                                    <Button 
                                        linkName = "Update" 
                                        linkUrl = {"/entity/" + entityType + "/"+ (entityType === "Book" ? item.isbn : item.id)}
                                    /> 
                                : null}
                            </td>
                            <td>
                                {del ? 
                                    <Button 
                                        linkName = "Delete"
                                        func = {() => handleDelete(parseInt(entityType === "Book" ? item.isbn as string : item.id as string))}
                                    /> 
                                : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;