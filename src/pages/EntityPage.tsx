import { useEffect, useState } from "react";
import { Book, Doc, QueryParams, User } from "../constants/Types";
import GetEntitiesConnection from "../connections/GetEntitiesConnection";
import DetailsTable from "../components/DetailsTable";
import DetailsForm from "../components/DetailsForm";
import { useParams } from "react-router-dom";
import UpdateEntityConnection from "../connections/UpdateEntityConnection";
import CreateEntityConnection from "../connections/CreateEntityConnection";

const EntityPage = () => {
    const params = useParams();
    const entityType = params.type as string;
    const id = params.id === undefined ? "" : params.id;
    const [entityDetails, setEntityDetails] = useState<User | Book | Doc | undefined>(undefined);

    useEffect(() => {
        const fetchEntityDetails = async () => {
            const key = entityType === "Book" ? "isbn" : "id";
            const params: Partial<QueryParams> = {
                filterByKey: key,
                filterByValue: id,
                sortBy: "",
                sortOrder: "ASC",
                limit: 10,
                offset: 0
            }; 
            
            const entities = await GetEntitiesConnection(entityType, params);
            setEntityDetails(entities === undefined ? undefined : entities[0]);
        }
        
        fetchEntityDetails();
    }, [entityType, id]);

    return (
        <div>
            {entityDetails ? (
                <div>
                    <DetailsTable 
                        entityType={entityType}
                        entity={entityDetails}
                    />
                    <h2>Update {entityType}</h2>
                    <DetailsForm 
                        fieldType={entityType}
                        id={parseInt(id)}
                        update={UpdateEntityConnection}
                    />
                </div>
            ) : (
                <div>
                    <h2 className="mb-4 text-gray-200 text-4xl text-center font-bold">Create new {entityType}?</h2>
                    <DetailsForm 
                        fieldType={entityType}
                        id={parseInt(id)}
                        create={CreateEntityConnection}
                    />
                </div>  
            )}
        </div>
    );
}

export default EntityPage;