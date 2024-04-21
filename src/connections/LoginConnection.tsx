import axios from "axios";
import { BASE_URL, authRoute } from "../constants/ConnectionRoutes";
import { loginFields } from "../constants/FormFields";
import { SetCookies } from "../utilities/CookieUtilities";
//import SetAuthToken from "../utilities/SetAuthToken";

const LoginConnection = async (loginDetails: Record<string, string>): Promise<void> => {
    const route = BASE_URL + authRoute + "/login";
    const payload = loginFields.map(field => loginDetails[field["id"]])

    await axios.post(route, payload,
        {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    })
    .then((response) => {
        const { token, expiresIn, userId, userRole } = response.data;
        SetCookies(token, expiresIn, userId, userRole);
    })
    .catch((error) => { 
        console.error(error.message);
    })
}

export default LoginConnection;