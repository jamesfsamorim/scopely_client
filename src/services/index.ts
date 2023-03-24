import { AuthService } from "./auth.service";
import {BattleClient} from "./battle.client.service";

export const authService = new AuthService();
export const battleClient = new BattleClient();