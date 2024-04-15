import axios from "axios";
import { BASE_URL, bookRoute, docRoute } from "../constants/ConnectionRoutes";
import { Book, Doc } from "../constants/Types";

const GetEntities = async (entityType: string, query: Record<string, string | number>): Promise<Book[] | Doc[] | undefined> => {
    const route = (entityType === "Book" ? 
        BASE_URL + bookRoute + "/" : BASE_URL + docRoute + "/") ;

    return await axios.get(route, {
        params: query,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error.message);
        return undefined;
    });
};

export default GetEntities;
