import { jogadoresLogados } from '../service/constants.js';

export function OnPlayerDisconnect(playerid: number, reason: number) {
    jogadoresLogados.delete(playerid);
    return 1;
}