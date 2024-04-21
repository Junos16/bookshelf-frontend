import Cookies from "js-cookie";
import { UserRole } from "../constants/Enums";

export const SetCookies = (token: string, expiresIn: number, userId: number, userRole: UserRole) => {
    const expirationDate = new Date(Date.now() + expiresIn * 1000);
    Cookies.set("token", token, { expires: expirationDate });
    Cookies.set("userId", userId.toString(), { expires: expirationDate });
    Cookies.set("userRole", userRole, { expires: expirationDate });
}

export const RemoveCookies = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    Cookies.remove("userRole");
}

export const GetCookies = () => {
    const token = Cookies.get("token");
    const userId = Cookies.get("userId");
    const userRole = Cookies.get("userRole");
    if (userId === undefined) return null;
    else return { token, userId: parseInt(userId), userRole };
}

export const Authorized = () => {
    const currentAuth = GetCookies();
    if (currentAuth !== null) return true;
    else return false;
}
