import Cookies from "js-cookie";

export function getAuthorizationHeader() {
    const currentUser = Cookies.get("currentUser");
    const {access_token} = JSON.parse(currentUser);

    return {
        Authorization: `Bearer ${access_token}`,
    };
}

export function getSocketAuthorization() {
    const currentUser = Cookies.get("currentUser");
    const {access_token} = currentUser ? JSON.parse(currentUser) : {access_token: ''};

    return {
        transportOptions: {
            polling: {
                extraHeaders: {
                    Authorization: access_token,
                }
            }
        }
    };
}