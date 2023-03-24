import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {PlayerAuth} from "../../types/player.type";

export const useCurrentUser = () => {
    const [user, setUser] = useState<PlayerAuth | null>(null);

    useEffect(() => {
        const currentUser = Cookies.get("currentUser");
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);

    return { user };
};