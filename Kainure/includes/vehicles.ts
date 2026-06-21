/* ============================================================================ *
 * Kainure - Vehicle Helper                                                      *
 * ================================= About ==================================== *
 * Helper completo para manipulação de veículos no SA-MP via Kainure.           *
 * Mantém os nomes originais das funções SA-MP para facilitar a migração        *
 * de desenvolvedores vindos do Pawn.                                           *
 * ============================================================================ */

// ========================== Criação / Destruição ==========================

/**
 * Cria um veículo no servidor.
 * @param vehicletype - ID do modelo do veículo
 * @param x - Coordenada X
 * @param y - Coordenada Y
 * @param z - Coordenada Z
 * @param rotation - Rotação do veículo
 * @param color1 - Cor primária
 * @param color2 - Cor secundária
 * @param respawn_delay - Tempo de respawn em segundos (-1 para nunca)
 * @param addsiren - Adiciona sirene (0 ou 1)
 * @returns ID do veículo criado
 */
export const CreateVehicle = (
    vehicletype: number,
    x: number,
    y: number,
    z: number,
    rotation: number,
    color1: number,
    color2: number,
    respawn_delay: number,
    addsiren: number = 0
): number => {
    return Native.CreateVehicle(vehicletype, Float(x), Float(y), Float(z), Float(rotation), color1, color2, respawn_delay, addsiren);
};

/**
 * Destrói um veículo.
 * @param vehicleid - ID do veículo
 */
export const DestroyVehicle = (vehicleid: number): void => {
    Native.DestroyVehicle(vehicleid);
};

/**
 * Força o respawn de um veículo.
 * @param vehicleid - ID do veículo
 */
export const SetVehicleToRespawn = (vehicleid: number): void => {
    Native.SetVehicleToRespawn(vehicleid);
};

// ========================== Posição ==========================

/**
 * Define a posição do veículo.
 * @param vehicleid - ID do veículo
 * @param x - Coordenada X
 * @param y - Coordenada Y
 * @param z - Coordenada Z
 */
export const SetVehiclePos = (vehicleid: number, x: number, y: number, z: number): void => {
    Native.SetVehiclePos(vehicleid, Float(x), Float(y), Float(z));
};

/**
 * Retorna a posição atual do veículo.
 * @param vehicleid - ID do veículo
 * @returns Objeto com x, y, z
 */
export const GetVehiclePos = (vehicleid: number): { x: number, y: number, z: number } => {
    const x = Ref(0.1), y = Ref(0.1), z = Ref(0.1);
    Native.GetVehiclePos(vehicleid, x.$, y.$, z.$);
    return { x: Number(x), y: Number(y), z: Number(z) };
};

/**
 * Define o ângulo do veículo.
 * @param vehicleid - ID do veículo
 * @param angle - Ângulo em graus
 */
export const SetVehicleZAngle = (vehicleid: number, angle: number): void => {
    Native.SetVehicleZAngle(vehicleid, Float(angle));
};

/**
 * Retorna o ângulo atual do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleZAngle = (vehicleid: number): number => {
    const angle = Ref(0.1);
    Native.GetVehicleZAngle(vehicleid, angle.$);
    return Number(angle);
};

/**
 * Define o virtual world do veículo.
 * @param vehicleid - ID do veículo
 * @param worldid - ID do virtual world
 */
export const SetVehicleVirtualWorld = (vehicleid: number, worldid: number): void => {
    Native.SetVehicleVirtualWorld(vehicleid, worldid);
};

/**
 * Retorna o virtual world atual do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleVirtualWorld = (vehicleid: number): number => {
    return Native.GetVehicleVirtualWorld(vehicleid);
};

// ========================== Stats ==========================

/**
 * Define a vida do veículo.
 * @param vehicleid - ID do veículo
 * @param health - Valor da vida (0-1000)
 */
export const SetVehicleHealth = (vehicleid: number, health: number): void => {
    Native.SetVehicleHealth(vehicleid, Float(health));
};

/**
 * Retorna a vida atual do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleHealth = (vehicleid: number): number => {
    const health = Ref(0.1);
    Native.GetVehicleHealth(vehicleid, health.$);
    return Number(health);
};

/**
 * Verifica se o veículo existe/está ativo.
 * @param vehicleid - ID do veículo
 */
export const IsValidVehicle = (vehicleid: number): boolean => {
    return Boolean(Native.IsValidVehicle(vehicleid));
};

/**
 * Retorna o modelo do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleModel = (vehicleid: number): number => {
    return Native.GetVehicleModel(vehicleid);
};

// ========================== Jogador / Veículo ==========================

/**
 * Coloca um jogador num veículo.
 * @param playerid - ID do jogador
 * @param vehicleid - ID do veículo
 * @param seatid - ID do assento (0 = motorista, 1 = passageiro)
 */
export const PutPlayerInVehicle = (playerid: number, vehicleid: number, seatid: number): void => {
    Native.PutPlayerInVehicle(playerid, vehicleid, seatid);
};

/**
 * Remove um jogador do veículo.
 * @param playerid - ID do jogador
 */
export const RemovePlayerFromVehicle = (playerid: number): void => {
    Native.RemovePlayerFromVehicle(playerid);
};

/**
 * Retorna o ID do veículo em que o jogador está.
 * @param playerid - ID do jogador
 * @returns ID do veículo ou INVALID_VEHICLE_ID
 */
export const GetPlayerVehicleID = (playerid: number): number => {
    return Native.GetPlayerVehicleID(playerid);
};

/**
 * Retorna o assento em que o jogador está.
 * @param playerid - ID do jogador
 * @returns ID do assento (0 = motorista, 1 = passageiro, etc)
 */
export const GetPlayerVehicleSeat = (playerid: number): number => {
    return Native.GetPlayerVehicleSeat(playerid);
};

// ========================== Cores ==========================

/**
 * Define as cores do veículo.
 * @param vehicleid - ID do veículo
 * @param color1 - Cor primária
 * @param color2 - Cor secundária
 */
export const ChangeVehicleColor = (vehicleid: number, color1: number, color2: number): void => {
    Native.ChangeVehicleColor(vehicleid, color1, color2);
};

/**
 * Define a pintura (paintjob) do veículo.
 * @param vehicleid - ID do veículo
 * @param paintjobid - ID do paintjob
 */
export const ChangeVehiclePaintjob = (vehicleid: number, paintjobid: number): void => {
    Native.ChangeVehiclePaintjob(vehicleid, paintjobid);
};

// ========================== Componentes ==========================

/**
 * Adiciona um componente ao veículo.
 * @param vehicleid - ID do veículo
 * @param componentid - ID do componente
 */
export const AddVehicleComponent = (vehicleid: number, componentid: number): void => {
    Native.AddVehicleComponent(vehicleid, componentid);
};

/**
 * Remove um componente do veículo.
 * @param vehicleid - ID do veículo
 * @param componentid - ID do componente
 */
export const RemoveVehicleComponent = (vehicleid: number, componentid: number): void => {
    Native.RemoveVehicleComponent(vehicleid, componentid);
};

// ========================== Danos ==========================

/**
 * Atualiza os danos visuais do veículo.
 * @param vehicleid - ID do veículo
 * @param panels - Painéis danificados
 * @param doors - Portas danificadas
 * @param lights - Luzes danificadas
 * @param tires - Pneus danificados
 */
export const UpdateVehicleDamageStatus = (vehicleid: number, panels: number, doors: number, lights: number, tires: number): void => {
    Native.UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
};

/**
 * Retorna o status de danos do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleDamageStatus = (vehicleid: number): { panels: number, doors: number, lights: number, tires: number } => {
    const panels = Ref(0), doors = Ref(0), lights = Ref(0), tires = Ref(0);
    Native.GetVehicleDamageStatus(vehicleid, panels.$, doors.$, lights.$, tires.$);
    return { panels: Number(panels), doors: Number(doors), lights: Number(lights), tires: Number(tires) };
};

/**
 * Repara completamente o veículo.
 * @param vehicleid - ID do veículo
 */
export const RepairVehicle = (vehicleid: number): void => {
    Native.RepairVehicle(vehicleid);
};

// ========================== Velocidade ==========================

/**
 * Retorna a velocidade do veículo.
 * @param vehicleid - ID do veículo
 * @returns Objeto com vx, vy, vz
 */
export const GetVehicleVelocity = (vehicleid: number): { vx: number, vy: number, vz: number } => {
    const vx = Ref(0.1), vy = Ref(0.1), vz = Ref(0.1);
    Native.GetVehicleVelocity(vehicleid, vx.$, vy.$, vz.$);
    return { vx: Number(vx), vy: Number(vy), vz: Number(vz) };
};

/**
 * Define a velocidade do veículo.
 * @param vehicleid - ID do veículo
 * @param vx - Velocidade X
 * @param vy - Velocidade Y
 * @param vz - Velocidade Z
 */
export const SetVehicleVelocity = (vehicleid: number, vx: number, vy: number, vz: number): void => {
    Native.SetVehicleVelocity(vehicleid, Float(vx), Float(vy), Float(vz));
};

// ========================== Motor / Luzes ==========================

/**
 * Define os parâmetros do veículo (motor, luzes, etc).
 * @param vehicleid - ID do veículo
 * @param engine - Motor (0 = desligado, 1 = ligado)
 * @param lights - Luzes (0 = apagadas, 1 = acesas)
 * @param alarm - Alarme
 * @param doors - Portas (0 = fechadas, 1 = abertas)
 * @param bonnet - Capô (0 = fechado, 1 = aberto)
 * @param boot - Porta-malas (0 = fechado, 1 = aberto)
 * @param objective - Objetivo
 */
export const SetVehicleParamsEx = (
    vehicleid: number,
    engine: number,
    lights: number,
    alarm: number,
    doors: number,
    bonnet: number,
    boot: number,
    objective: number
): void => {
    Native.SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
};

/**
 * Retorna os parâmetros atuais do veículo.
 * @param vehicleid - ID do veículo
 */
export const GetVehicleParamsEx = (vehicleid: number): { engine: number, lights: number, alarm: number, doors: number, bonnet: number, boot: number, objective: number } => {
    const engine = Ref(0), lights = Ref(0), alarm = Ref(0), doors = Ref(0), bonnet = Ref(0), boot = Ref(0), objective = Ref(0);
    Native.GetVehicleParamsEx(vehicleid, engine.$, lights.$, alarm.$, doors.$, bonnet.$, boot.$, objective.$);
    return {
        engine: Number(engine),
        lights: Number(lights),
        alarm: Number(alarm),
        doors: Number(doors),
        bonnet: Number(bonnet),
        boot: Number(boot),
        objective: Number(objective)
    };
};

// ========================== Número de placa ==========================

/**
 * Define o número de placa do veículo.
 * @param vehicleid - ID do veículo
 * @param numberplate - Texto da placa
 */
export const SetVehicleNumberPlate = (vehicleid: number, numberplate: string): void => {
    Native.SetVehicleNumberPlate(vehicleid, numberplate);
};