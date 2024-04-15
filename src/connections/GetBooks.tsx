import { BASE_URL, bookRoute } from "../constants/ConnectionRoutes";

const GetBooks = async (): Promise<Object[] | undefined> => {
    const route = BASE_URL + bookRoute + "/";

    await axios.get(route, )
} 

export default GetBooks;