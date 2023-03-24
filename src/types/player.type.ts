export interface Player {
    id: number;
    email: string;
    name: string;
    gold: number;
    attack: number;
    luck: number;
    hitPoints: number;
}

export interface PlayerAuth extends Player {
    access_token: string;
}