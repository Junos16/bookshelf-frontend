import axios from "axios";
import { BASE_URL, authRoute } from "../constants/ConnectionRoutes";
import { loginFields } from "../constants/FormFields";
//import SetAuthToken from "../utilities/SetAuthToken";

const LoginConnection = async (loginDetails: Record<string, string>): Promise<void> => {
    const route = BASE_URL + authRoute + "/login";
    
    await axios.post(route, 
        loginFields.map(field => loginDetails[field["id"]]),
        {
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    })
    .then(async (response) => {
        //console.log(response);
        const token = response.data.token;
        const expiresIn = response.data.expiresIn;
        const userId = response.data.userId;
        const userRole = response.data.userRole;
        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", userRole);
        //console.log(localStorage.getItem("userId"));
        //localStorage.clear();
        //await SetAuthToken(token);
    })
    .catch((error) => { 
        console.error(error.message);
    })
}

export default LoginConnection;