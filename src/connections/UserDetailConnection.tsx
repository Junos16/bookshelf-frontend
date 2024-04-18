import axios from "axios";
import { BASE_URL, userRoute } from "../constants/ConnectionRoutes"
import { User } from "../constants/Types";

const UserDetailConnection = async (): Promise<User | undefined> => {
    const userId = localStorage.getItem("userId");
    //console.log(userId);
    const route = BASE_URL + userRoute + "/" + userId;
    
    return await axios.get(route, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
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