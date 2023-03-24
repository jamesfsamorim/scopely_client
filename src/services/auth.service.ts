import axios, {AxiosInstance, CreateAxiosDefaults} from "axios";
import {getAuthorizationHeader} from "../utils/header";

export class AuthService {
    protected readonly instance: AxiosInstance;

    public constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8080",
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
        } as CreateAxiosDefaults);
    }

    login = (email: string, password: string) => {
        return this.instance
            .post("auth/login", {
                email,
                password,
            })
            .then((res) => {
                return res.data;
            });
    };

    getPlayerLeaderboard = async () => {
        return await this.instance.get(`/players/leaderboard`, {
            headers: getAuthorizationHeader(),
        })
    };

    getPlayerBattles = async () => {
        return await this.instance.get(`/players/find/opponents`, {
            headers: getAuthorizationHeader(),
        })
    };
}