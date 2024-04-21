import axios from "axios";
import { BASE_URL, userRoute } from "../constants/ConnectionRoutes"
import { User } from "../constants/Types";
import { GetCookies } from "../utilities/CookieUtilities";

const UserDetailConnection = async (): Promise<User | undefined> => {
    const cookies = GetCookies();
    const userId = cookies ? cookies.userId : undefined;
    const token = cookies ? cookies.token : undefined;
    //console.log(userId);
    const route = BASE_URL + userRoute + "/" + userId;
    
    return await axios.get(route, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.error(error.message);
        return undefined;
    })

}

export default UserDetailConnection;