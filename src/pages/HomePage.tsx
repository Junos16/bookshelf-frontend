import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import FilterForm from "../components/FilterForm";
import Table from "../components/Table";
import GetEntitiesConnection from "../connections/GetEntitiesConnection";
import Navbar from "../components/Navbar";
import { Book, Doc, QueryParams } from "../constants/Types";

const HomePage: React.FC = () => {
    const [selectedEntity, setSelectedEntity] = useState("Book");
    const [queryParams, setQueryParams] = useState<Partial<QueryParams>>({
        filterByKey: "",
        filterByValue: "",
        sortOrder: "ASC",
        limit: 10,
        offset: 0
    });
    
    const [Entities, setEntities] = useState<Book[] | Doc[] | undefined>(undefined)

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const data = await GetEntitiesConnection(selectedEntity, queryParams);
                setEntities(data);
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };

        fetchInitialData();
    }, []); 
    
    // const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value, type, checked } = e.target;

    //     if (type !== "checkbox" || id === "submit") {
    //         setQueryParams(prevParams => ({
    //             ...prevParams,
    //             [id]: value,
    //         }));
    //     } else {
    //         setQueryParams(prevParams => ({
    //             ...prevParams,
    //             [id]: checked ? "DESC" : "ASC", 
    //         }));
    //     }
    // };

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        // console.log(id, value);

        if (type === "checkbox") {
            setQueryParams(prevParams => ({
                ...prevParams,
                [id]: checked ? "DESC" : "ASC", 
            }));
        } else {
            setQueryParams(prevParams => ({
                ...prevParams,
                [id]: value,
            }));
            console.log(queryParams);
        }
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const data = await GetEntitiesConnection(selectedEntity, queryParams);
            // console.log(data);
            setEntities(data);
        } catch (error) {
            console.error("Error fetching entities:", error);
        }
    };

    const handleButtonClick = (offsetChange: number) => {
        setQueryParams(prevParams => ({
            ...prevParams,
            offset: (prevParams.offset || 0) + offsetChange
        }));
    };

    return (
        <div>
            <Header
                heading="BookShelf"
                paragraph="Share books and notes with all students in your university"
                linkName="Home"
                linkUrl="/"
            />
            <div>
                {localStorage.getItem("token") ? (
                    <h1>lol</h1>
                ) : ( 
                    <div>
                       <Button 
                            linkName="Login"
                            linkUrl="/login"
                        />
                        <Button
                            linkName="Signup"
                            linkUrl="/signup"
                        />  
                    </div>    
                )}
            </div>
            <div>
                <Navbar onSelectEntity={setSelectedEntity} />
                <FilterForm 
                    entityType="Book"
                    queryParams={queryParams}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleButtonClick={handleButtonClick}
                />
                <Table list={Entities ?? []} />
            </div>
        </div>
    );
}

export default HomePage;
