import axios from "axios";
import { BASE_URL, bookRoute, docRoute, userRoute } from "../constants/ConnectionRoutes";
import { Book, Doc, QueryParams } from "../constants/Types";
import { GetCookies } from "../utilities/CookieUtilities";

const GetEntitiesConnection = async (entityType: string, query: Partial<QueryParams>): Promise<Book[] | Doc[] | undefined> => {
    //console.log("retard");
    const route = (entityType === "Book" ? 
        BASE_URL + bookRoute + "/" 
        : (entityType === "Doc" ?
            BASE_URL + docRoute + "/"
            : BASE_URL + userRoute + "/"
        )   
    );

    const token = GetCookies()?.token;
    // console.log(query);
    
    return await axios.get(route, {
        params: query,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
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
