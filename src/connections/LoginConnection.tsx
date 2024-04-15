import axios from "axios";
import { BASE_URL, authRoute } from "../constants/ConnectionRoutes";
import { loginFields } from "../constants/FormFields";
import SetAuthToken from "./SetAuthToken";

const LoginConnection = async (loginDetails: Record<string, string>): Promise<void> => {
    const route = BASE_URL + authRoute + "/login";
    
    await axios.post(route, 
        loginFields.map(field => loginDetails[field["id"]]),
        {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(async (response) => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        await SetAuthToken(token);
    })
    .catch((error) => { 
        console.error(error.message);
    })
}

export default LoginConnection;