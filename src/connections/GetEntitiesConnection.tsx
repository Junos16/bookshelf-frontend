import axios from "axios";
import { BASE_URL, bookRoute, docRoute } from "../constants/ConnectionRoutes";
import { Book, Doc, QueryParams } from "../constants/Types";

const GetEntitiesConnection = async (entityType: string, query: Partial<QueryParams>): Promise<Book[] | Doc[] | undefined> => {
    console.log("retard");
    const route = (entityType === "Book" ? 
        BASE_URL + bookRoute + "/" : 
        BASE_URL + docRoute + "/"
    );
    
    return await axios.get(route, {
        params: query,
        headers: {
            "Content-Type": "application/json",
            // "Authorization": localStorage.getItem("token")
        }
    })
    .then((response) => {
        // console.log(response);
        return response.data;
    })
    .catch((error) => {
        console.error(error.message);
        return undefined;
    });
};

export default GetEntitiesConnection;
