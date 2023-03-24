import io, {Socket} from 'socket.io-client';
import {getSocketAuthorization} from "../utils/header";
import Cookies from "js-cookie";

export class BattleClient {
    private client: Socket;

    constructor() {
        this.client = io(process.env.API_HOST, getSocketAuthorization());
    }

    connection() {
        if(!this.client.connected) {
            this.client.connect();
        }

        const currentUser = Cookies.get("currentUser");
        const user = currentUser ? JSON.parse(currentUser) : {};

        this.client.emit('register',{...user});
    }

    findOpponents(setPlayers: (any) => void) {
        this.client.emit('findOpponents', (opponents) => setPlayers(opponents));
    }

    disconnectClient() {
        this.client.disconnect();
    }
}