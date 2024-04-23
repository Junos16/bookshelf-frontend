import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import FilterForm from "../components/FilterForm";
import Table from "../components/Table";
import GetEntitiesConnection from "../connections/GetEntitiesConnection";
import Navbar from "../components/Navbar";
import { Book, Doc, QueryParams, User } from "../constants/Types";
import { Authorized, GetCookies, RemoveCookies } from "../utilities/CookieUtilities";
import { UserRole } from "../constants/Enums";
// import CheckTokenExpiration from "../utilities/CheckTokenExpiration";

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
    
    const [Entities, setEntities] = useState<Book[] | Doc[] | User[] | undefined>(undefined)
    const [LoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {  
        // const checkAuthStatus = () => {
        //     if (!Authorized()) setLoggedIn(false);
        //     else setLoggedIn(true);
        // };

        // const intervalId = setInterval(checkAuthStatus, 3600 * 1000);
        // return () => clearInterval(intervalId);
        setLoggedIn(Authorized());
        // console.log(GetCookies()?.token);
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
        RemoveCookies();
        setLoggedIn(false);
    };

    const handleLogin = () => {
        setLoggedIn(true);
        window.location.reload();
    }

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
                    <div>
                        <Button
                            linkName="Logout"
                            func={handleLogout} 
                        />
                        <Button
                            linkName="Profile"
                            linkUrl="/Profile" 
                        />
                        {GetCookies()?.userRole === UserRole.ADMIN ? (
                            <Button
                                linkName="Add Book"
                                linkUrl="/entity/Book/0"  
                            />  
                    ) : null};
                    </div>
                ) : ( 
                    <div>
                       <Button 
                            linkName = "Login"
                            linkUrl = "/login"
                            func = {handleLogin}
                        />
                        <Button
                            linkName = "Signup"
                            linkUrl = "/signup"
                        />  
                    </div>    
                )}
            </div>
            <div>
                <Navbar
                    options = {["Book", "Doc"]} 
                    onSelectEntity = {setSelectedEntity} 
                />
                <FilterForm 
                    entityType = {selectedEntity}
                    queryParams = {queryParams}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    handleButtonClick = {handleButtonClick}
                />
                <Table 
                    list={Entities ?? []} 
                    download={true} 
                    update={GetCookies()?.userRole === UserRole.ADMIN} 
                    del={GetCookies()?.userRole === UserRole.ADMIN}
                />
            </div>
        </div>
    );
}

export default HomePage;
