import axios from "axios";
import { BASE_URL, bookRoute, docRoute, userRoute } from "../constants/ConnectionRoutes";
import { GetCookies } from "../utilities/CookieUtilities";

const DeleteEntityConnection = async (entityType: string, id: number) => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/" + id :
        (entityType === "User" ? 
            BASE_URL + userRoute + "/" + GetCookies()?.userId :
            BASE_URL + docRoute + "/" + id
        )
    );

    const token = GetCookies()?.token;
    const params = entityType === "Book" ? {"isbn": id} : {"id": id};
    
    await axios.delete(route, {
            params: params,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    })
}

export default DeleteEntityConnection;