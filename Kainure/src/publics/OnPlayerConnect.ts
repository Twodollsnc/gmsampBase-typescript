import { jogadorExiste } from '../service/services.js';
import { mostrarDialogLogin, mostrarDialogRegistro } from '../service/dialogs.js';
import { GetPlayerName } from '../../includes/player.js';

export async function OnPlayerConnect(playerid: number) {
    const nome   = GetPlayerName(playerid);
    const existe = await jogadorExiste(nome);

    if (existe)
        mostrarDialogLogin(playerid);
    else
        mostrarDialogRegistro(playerid);

    return 1;
}