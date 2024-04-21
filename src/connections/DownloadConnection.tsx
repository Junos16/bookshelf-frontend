import axios from "axios";
import { BASE_URL, bookRoute, docRoute } from "../constants/ConnectionRoutes"
import { GetCookies } from "../utilities/CookieUtilities";

const DownloadConnection = async (entityType: string, entityId: number): Promise<void> => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/download/" :
        BASE_URL + docRoute + "/download/"
    );

    const token = (entityType === "Book" ?
        GetCookies()?.token : ""
    );

    return await axios.get(route, {
        params: entityId,
        responseType: "blob",
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

export default DownloadConnection;