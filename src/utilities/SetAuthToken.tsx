import axios from "axios";

const SetAuthToken = async (token: string): Promise<void> => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = "${token}";
    } else {
        await delete axios.defaults.headers.common["Authorization"];
    }
}

export default SetAuthToken;