import Cookies from "js-cookie";
import {battleClient} from "../../services";

export const useLogout = () => {
    const logout = () => {
        Cookies.remove("currentUser");
        battleClient.disconnectClient()
    };

    return { logout };
};