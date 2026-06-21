import { DIALOG_LOGIN, DIALOG_REGISTRO } from '../service/constants.js';
import { handleLogin } from '../dialogs/loginHandler.js';
import { handleRegistro } from '../dialogs/registroHandler.js';

export async function OnDialogResponse(
    playerid: number,
    dialogid: number,
    response: number,
    listitem: number,
    inputtext: string
) {
    if (dialogid === DIALOG_LOGIN)
        await handleLogin(playerid, response, inputtext);

    if (dialogid === DIALOG_REGISTRO)
        await handleRegistro(playerid, response, inputtext);

    return 1;
}