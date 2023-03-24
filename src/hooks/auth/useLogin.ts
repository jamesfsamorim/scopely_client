import Cookies from "js-cookie";
import {Player} from "../../types/player.type";
import {authService} from "../../services";

export const useLogin = () => {
    const login = async (email: string, password: string) => {
        const player = await authService.login(email, password);

        if (player) {
            Cookies.set("currentUser", JSON.stringify(player));
        }

        return player as Player;
    };

    return { login };
};