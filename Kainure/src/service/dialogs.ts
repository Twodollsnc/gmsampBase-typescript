import { DIALOG_LOGIN, DIALOG_REGISTRO } from './constants.js';
import { GetPlayerName } from '../../includes/player.js';

export const mostrarDialogLogin = (playerid: number): void => {
    const nome = GetPlayerName(playerid);
    Native.ShowPlayerDialog(playerid, DIALOG_LOGIN, 1, 'Login',
        `Bem vindo de volta, ${nome}!\nDigite sua senha:`, 'Entrar', 'Sair');
};

export const mostrarDialogLoginErro = (playerid: number): void => {
    Native.ShowPlayerDialog(playerid, DIALOG_LOGIN, 1, 'Login',
        'Senha incorreta! Tente novamente:', 'Entrar', 'Sair');
};

export const mostrarDialogRegistro = (playerid: number): void => {
    const nome = GetPlayerName(playerid);
    Native.ShowPlayerDialog(playerid, DIALOG_REGISTRO, 1, 'Registro',
        `Bem vindo, ${nome}!\nEscolha uma senha:`, 'Registrar', 'Sair');
};

export const mostrarDialogRegistroErro = (playerid: number): void => {
    Native.ShowPlayerDialog(playerid, DIALOG_REGISTRO, 1, 'Registro',
        'A senha deve ter pelo menos 4 caracteres!\nEscolha uma senha:', 'Registrar', 'Sair');
};