import { verificarSenha } from '../service/services.js';
import { mostrarDialogLoginErro } from '../service/dialogs.js';
import { jogadoresLogados } from '../service/constants.js';
import { GetPlayerName, SendClientMessage, SpawnPlayer, SetPlayerPos, SetPlayerFacingAngle } from '../../includes/player.js';

export async function handleLogin(playerid: number, response: number, inputtext: string) {
    if (!response) {
        Native.Kick(playerid);
        return;
    }

    const nome = GetPlayerName(playerid);
    const senhaCorreta = await verificarSenha(nome, inputtext);

    if (!senhaCorreta) {
        mostrarDialogLoginErro(playerid);
        return;
    }
   /* SetPlayerPos(playerid, 1717.3047, -1946.4878, 13.5591);
    SetPlayerFacingAngle(playerid, 3.3777);*/
    SpawnPlayer(playerid);
    jogadoresLogados.add(playerid);
    SendClientMessage(playerid, 0x00FF00FF, 'Login realizado com sucesso kkkkkkkkkkkkkkkkkk!');
    
}