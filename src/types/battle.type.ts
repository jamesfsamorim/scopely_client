import {Player} from "./player.type";

export interface Battle {
    id: number
    challenger: Player
    defender: Player
}