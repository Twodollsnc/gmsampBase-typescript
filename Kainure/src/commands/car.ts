import { GetPlayerPos, GetPlayerFacingAngle } from '../../includes/player.js';
import { CreateVehicle, PutPlayerInVehicle } from '../../includes/vehicles.js';

export function cmdCarro(playerid: number, params: string) {
    const modelid = params ? parseInt(params) : 411; // 411 = Infernus padrão

    if (isNaN(modelid) || modelid < 400 || modelid > 611) {
        Native.SendClientMessage(playerid, 0xFF0000FF, 'Modelo inválido! Use entre 400 e 611.');
        return;
    }

    const pos   = GetPlayerPos(playerid);
    const angle = GetPlayerFacingAngle(playerid);

    const vehicleid = CreateVehicle(modelid, pos.x, pos.y, pos.z, angle, -1, -1, -1);
    PutPlayerInVehicle(playerid, vehicleid, 0);

    Native.SendClientMessage(playerid, 0x00FF00FF, `Carro ${modelid} spawnado!`);
}