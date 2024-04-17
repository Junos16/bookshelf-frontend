//import axios from "axios";

const CheckTokenExpiration = async (): Promise<boolean> => {
    const expiresIn = localStorage.getItem("expiresIn");
    const expirationTime = expiresIn ? parseInt(expiresIn) * 1000 : 0;
    const isTokenExpired = expirationTime < Date.now();

    if (isTokenExpired) {
        localStorage.clear;
        return false;
        //await delete axios.defaults.headers.common["Authorization"];
    } else return true;
}

export default CheckTokenExpiration;