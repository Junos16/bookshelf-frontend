import axios from "axios";
import { BASE_URL, bookRoute, docRoute, userRoute } from "../constants/ConnectionRoutes";
import { GetCookies } from "../utilities/CookieUtilities";
import { Book, Doc, User } from "../constants/Types";

const CreateEntityConnection = async (entityType: string, entityDetails: Partial<Book | Doc | User>, file?: File | null) => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/" :
        (entityType === "User" ? 
            BASE_URL + userRoute + "/" :
            BASE_URL + docRoute + "/"
        )
    );

    const token = GetCookies()?.token;

    const formData = new FormData();
    Object.entries(entityDetails).forEach(([key, value]) => {
        formData.append(key, value as string);
    });

    file ? formData.append("file", file) : null;

    await axios.post(route, formData,
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

export default CreateEntityConnection;