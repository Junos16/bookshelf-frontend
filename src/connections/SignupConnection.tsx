import axios from "axios";
import { BASE_URL, authRoute } from "../constants/ConnectionRoutes";
//import { signupFields } from "../constants/FormFields";

const SignupConnection = async (SignupDetails: Record<string, string>): Promise<void> => {
    const route = BASE_URL + authRoute + "/signup";

    await axios.post(route, SignupDetails,
        {
            headers: {
                "Content-Type": "application/json"
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

export default SignupConnection;