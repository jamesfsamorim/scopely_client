import axios, {CreateAxiosDefaults} from "axios";

export const publicApi = axios.create({
   baseURL: process.env.API_HOST,
} as CreateAxiosDefaults);