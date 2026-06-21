import { SendClientMessage } from "../../includes/player.js";
import { GivePlayerMoney } from "../../includes/money.js";

export function cmdMoney(playerid:number, params: string)
{
    if(!params) SendClientMessage(playerid, 0xFF0000FF, "Use /pegardinheiro[valor]");
    const valor = parseInt(params);
    if(isNaN(valor) || valor <= 0 ) SendClientMessage(playerid, 0xff0000ff, "Digite um valor");
    GivePlayerMoney(playerid, valor)
    SendClientMessage(playerid, 0xff0000ff, `Voce recebeu R$ ${valor.toLocaleString('pt-br')}`) 
}