import axios from "axios";
import { BASE_URL, bookRoute, docRoute, userRoute } from "../constants/ConnectionRoutes";
import { GetCookies } from "../utilities/CookieUtilities";
import { Book, Doc, User } from "../constants/Types";

const UpdateEntityConnection = async (entityType: string, entityDetails: Partial<Book | Doc | User>, id: number, file?: File | null) => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/" + id :
        (entityType === "User" ? 
            BASE_URL + userRoute + "/" + GetCookies()?.userId :
            BASE_URL + docRoute + "/" + id
        )
    );

    const token = GetCookies()?.token;
    const contentType = file ? "multipart/form-data" : "application/json";

    const formData = new FormData();
    Object.entries(entityDetails).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
        formData.append(key, value as string);
    }
    });

    file ? formData.append("file", file) : null;

    await axios.put(route, formData,
        {
            headers: {
                "Content-Type": contentType,
                "Authorization": token
            }
        }
    )
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    })
}

export default UpdateEntityConnection;