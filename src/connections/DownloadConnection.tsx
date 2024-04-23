import axios from "axios";
import download from "downloadjs";
import { BASE_URL, bookRoute, docRoute } from "../constants/ConnectionRoutes"
import { GetCookies } from "../utilities/CookieUtilities";

const DownloadConnection = async (entityType: string, entityId: number): Promise<void> => {
    const route = (entityType === "Book" ?
        BASE_URL + bookRoute + "/download/" + entityId :
        BASE_URL + docRoute + "/download/" + entityId
    );

    // const idObj = entityType === "Book" ? { id: entityId } : { isbn: entityId };

    // const token = (entityType === "Book" ?
    //     GetCookies()?.token : ""
    // );

    const token = GetCookies()?.token;
    
    return await axios.get(route, {
        responseType: "blob",
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": token
        }
    })
    .then((response) => {
        download(response.data, `${entityType}_${entityId}.pdf`)
        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement("a");
        // link.href = url;
        // //link.setAttribute("download", `${entityType}_${entityId}.docx`);
        // document.body.appendChild(link);
        // link.click();
        // link.parentNode?.removeChild(link);
        // console.log(response);
    })
    .catch((error) => {
        console.error(error.message);
    })
}

export default DownloadConnection;