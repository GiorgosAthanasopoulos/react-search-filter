import axios, {AxiosResponse} from "axios";

const BASE_API_URL: string = "https://random-word-api.herokuapp.com/";

export default async function getWords(): Promise<[]> {
    const response: AxiosResponse = await axios.get(BASE_API_URL + "word?number=20");
    return await response.data;
}