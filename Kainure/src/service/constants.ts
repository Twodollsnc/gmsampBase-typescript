export const DIALOG_LOGIN    = 1;
export const DIALOG_REGISTRO = 2;

export const jogadoresLogados = new Set<number>();

export const isLogado = (playerid: number): boolean => {
    return jogadoresLogados.has(playerid);
};