import { registrarJogador } from '../service/services.js';
import { mostrarDialogRegistroErro } from '../service/dialogs.js';
import { jogadoresLogados } from '../service/constants.js';
import { SendClientMessage, SpawnPlayer, SetPlayerPos, SetPlayerFacingAngle} from '../../includes/player.js';

export async function handleRegistro(playerid: number, response: number, inputtext: string) {
    if (!response) {
        Native.Kick(playerid);
        return;
    }

    if (inputtext.length < 4) {
        mostrarDialogRegistroErro(playerid);
        return;
    }

    await registrarJogador(playerid, inputtext);

    jogadoresLogados.add(playerid);
    SendClientMessage(playerid, 0x00FF00FF, 'Conta criada com sucesso! Bem vindo!');
    SetPlayerPos(playerid, 1717.3047, -1946.4878, 13.5591);
    SetPlayerFacingAngle(playerid, 3.3777);
    SpawnPlayer(playerid);
}