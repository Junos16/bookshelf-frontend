import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import FilterForm from "../components/FilterForm";
import Table from "../components/Table";
import GetEntitiesConnection from "../connections/GetEntitiesConnection";
import Navbar from "../components/Navbar";
import { Book, Doc, QueryParams } from "../constants/Types";
import CheckTokenExpiration from "../utilities/CheckTokenExpiration";

const HomePage: React.FC = () => {
    const [selectedEntity, setSelectedEntity] = useState("Book");
    const [queryParams, setQueryParams] = useState<Partial<QueryParams>>({
        filterByKey: "",
        filterByValue: "",
        sortBy: "",
        sortOrder: "ASC",
        limit: 10,
        offset: 0
    });
    
    const [Entities, setEntities] = useState<Book[] | Doc[] | undefined>(undefined)
    const [LoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(localStorage.getItem("token") ? !!CheckTokenExpiration() : false);
        async () => {
            setEntities(await GetEntitiesConnection(selectedEntity, queryParams));
        }; 
    }, [queryParams, selectedEntity]); 
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setQueryParams(prevParams => ({
            ...prevParams,
            [id]: type === "checkbox" ? (checked ? "DESC" : "ASC") : value
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const data = await GetEntitiesConnection(selectedEntity, queryParams);
        setEntities(data);
        //console.log(localStorage.getItem("token"));
    };

    const handleButtonClick = (offsetChange: number) => {
        setQueryParams(prevParams => ({
            ...prevParams,
            offset: (prevParams.offset || 0) + offsetChange
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn")
        //console.log(localStorage.getItem("token"));
        setLoggedIn(false);
    };

    return (
        <div>
            <Header
                heading = "BookShelf"
                paragraph = "Share books and notes with all students in your university"
                linkName = "Home"
                linkUrl = "/"
            />
            <div>
                {LoggedIn ? (
                    <Button 
                        linkName = "Logout"
                        func = {handleLogout}
                    />
                ) : ( 
                    <div>
                       <Button 
                            linkName = "Login"
                            linkUrl = "/login"
                        />
                        <Button
                            linkName = "Signup"
                            linkUrl = "/signup"
                        />  
                    </div>    
                )}
            </div>
            <div>
                <Navbar onSelectEntity = {setSelectedEntity} />
                <FilterForm 
                    entityType = "Book"
                    queryParams = {queryParams}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    handleButtonClick = {handleButtonClick}
                />
                <Table list = {Entities ?? []} />
            </div>
        </div>
    );
}

export default HomePage;
