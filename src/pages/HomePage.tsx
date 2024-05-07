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
    const [LoggedIn, setLoggedIn] = useState<boolean>();

    useEffect(() => {  
        setLoggedIn(Authorized());
        const fetchInitialEntities = async () => {
            setEntities(await GetEntitiesConnection(selectedEntity, queryParams));
        }; 

        fetchInitialEntities();
    }, [LoggedIn, queryParams, selectedEntity]);
    

    
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
    };

    const handleButtonClick = async (offsetChange: number) => {
        setQueryParams(prevParams => ({
            ...prevParams,
            offset: (prevParams.offset || 0) + offsetChange
        }));

        const refreshEntities = async () => {
            setEntities(await GetEntitiesConnection(selectedEntity, queryParams));
        }; 

        refreshEntities();
    };

    const handleLogout = () => {
        RemoveCookies();
        setLoggedIn(false);
    };

    const handleLogin = () => {
        setLoggedIn(true);        
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <Header
                    heading="BookShelf"
                    paragraph="Share books and notes with all students in your university"
                />
                <div className="flex items-center">
                    {LoggedIn ? (
                        <div className="flex">
                            <Button
                                linkName="Logout"
                                func={handleLogout}
                                customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4 mr-2 ml-8"
                            />
                            <Button
                                linkName="Profile"
                                linkUrl="/Profile"
                                customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4 mr-2"
                            />
                            {GetCookies()?.userRole === UserRole.ADMIN ? (
                                <Button
                                    linkName="Add Book"
                                    linkUrl="/entity/Book/create"
                                    customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4"
                                />
                            ) : null}
                        </div>
                    ) : (
                        <div className="flex">
                            <Button
                                linkName="Login"
                                linkUrl="/login"
                                func={handleLogin}
                                customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4 mr-2 ml-8"
                            />
                            <Button
                                linkName="Signup"
                                linkUrl="/signup"
                                customClass="transition duration-300 ease-in-out hover:bg-emerald-600 bg-emerald-500 text-black font-bold rounded-md py-2 px-4"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <FilterForm
                    entityType={selectedEntity}
                    queryParams={queryParams}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleButtonClick={handleButtonClick}
                />
                <Table
                    list={Entities ?? []}
                    download={true}
                    update={GetCookies()?.userRole === UserRole.ADMIN}
                    del={GetCookies()?.userRole === UserRole.ADMIN}
                />                
                <div className="mb-4">
                    <Navbar
                        options={Authorized() ? ["Book", "Doc"] : ["Book"]}
                        onSelectEntity={setSelectedEntity}
                    />
                </div>
            </div>
        </div>

        // <div className = "flex flex-col">
        //     <Header
        //         heading = "BookShelf"
        //         paragraph = "Share books and notes with all students in your university"
        //     />
        //     <div className = "flex justify-end items-center px-4">
        //         {LoggedIn ? (
        //             <div>
        //                 <Button
        //                     linkName="Logout"
        //                     func={handleLogout} 
        //                 />
        //                 <Button
        //                     linkName="Profile"
        //                     linkUrl="/Profile" 
        //                 />
        //                 {GetCookies()?.userRole === UserRole.ADMIN ? (
        //                     <Button
        //                         linkName="Add Book"
        //                         linkUrl="/entity/Book/create"  
        //                     />  
        //             ) : null};
        //             </div>
        //         ) : ( 
        //             <div>
        //                <Button 
        //                     linkName = "Login"
        //                     linkUrl = "/login"
        //                     func = {handleLogin}
        //                 />
        //                 <Button
        //                     linkName = "Signup"
        //                     linkUrl = "/signup"
        //                 />  
        //             </div>    
        //         )}
        //     </div>
        //     <div>
        //         <Navbar
        //             options = {Authorized() ? ["Book", "Doc"] : ["Book"]} 
        //             onSelectEntity = {setSelectedEntity} 
        //         />
        //         <FilterForm 
        //             entityType = {selectedEntity}
        //             queryParams = {queryParams}
        //             handleChange = {handleChange}
        //             handleSubmit = {handleSubmit}
        //             handleButtonClick = {handleButtonClick}
        //         />
        //         <Table 
        //             list={Entities ?? []} 
        //             download={true} 
        //             update={GetCookies()?.userRole === UserRole.ADMIN} 
        //             del={GetCookies()?.userRole === UserRole.ADMIN}
        //         />
        //     </div>
        // </div>
    );
}

export default HomePage;
