import axios from "axios";
import { BASE_URL, bookRoute, docRoute, userRoute } from "../constants/ConnectionRoutes";
import { GetCookies } from "../utilities/CookieUtilities";
import { Book, Doc, User } from "../constants/Types";

const UpdateEntityConnection = async (entityType: string, entityDetails: Partial<Book | Doc | User>, file?: File | null) => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/" + entityDetails.isbn :
        (entityType === "User" ? 
            BASE_URL + userRoute + "/" + entityDetails.id:
            BASE_URL + docRoute + "/" + entityDetails.id
        )
    );

    const token = GetCookies()?.token;

    const formData = new FormData();
    Object.entries(entityDetails).forEach(([key, value]) => {
        formData.append(key, value as string);
    });

    file ? formData.append("file", file) : null;

    await axios.put(route, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
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