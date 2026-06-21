/* ============================================================================ *
 * Kainure - Player Helper                                                       *
 * ================================= About ==================================== *
 * Helper completo para manipulação de jogadores no SA-MP via Kainure.          *
 * Mantém os nomes originais das funções SA-MP para facilitar a migração        *
 * de desenvolvedores vindos do Pawn.                                           *
 * ============================================================================ */

// ========================== Mensagens ==========================

/**
 * Envia uma mensagem para um jogador específico.
 * @param playerid - ID do jogador
 * @param color - Cor da mensagem em formato hex (ex: 0xFF0000FF)
 * @param message - Mensagem a ser enviada
 */
export const SendClientMessage = (playerid: number, color: number, message: string): void => {
    Native.SendClientMessage(playerid, color, message);
};

/**
 * Envia uma mensagem para todos os jogadores.
 * @param color - Cor da mensagem em formato hex
 * @param message - Mensagem a ser enviada
 */
export const SendClientMessageToAll = (color: number, message: string): void => {
    Native.SendClientMessageToAll(color, message);
};

/**
 * Envia uma mensagem no chat como se fosse do próprio jogador.
 * @param playerid - ID do jogador
 * @param message - Mensagem a ser enviada
 */
export const SendPlayerMessageToAll = (playerid: number, message: string): void => {
    Native.SendPlayerMessageToAll(playerid, message);
};

/**
 * Exibe uma game text na tela do jogador.
 * @param playerid - ID do jogador
 * @param text - Texto a ser exibido
 * @param time - Tempo em ms
 * @param style - Estilo do texto (1-6)
 */
export const GameTextForPlayer = (playerid: number, text: string, time: number, style: number): void => {
    Native.GameTextForPlayer(playerid, text, time, style);
};

/**
 * Exibe uma game text para todos os jogadores.
 * @param text - Texto a ser exibido
 * @param time - Tempo em ms
 * @param style - Estilo do texto (1-6)
 */
export const GameTextForAll = (text: string, time: number, style: number): void => {
    Native.GameTextForAll(text, time, style);
};

// ========================== Posição ==========================

/**
 * Define a posição do jogador.
 * @param playerid - ID do jogador
 * @param x - Coordenada X
 * @param y - Coordenada Y
 * @param z - Coordenada Z
 */
export const SetPlayerPos = (playerid: number, x: number, y: number, z: number): void => {
    Native.SetPlayerPos(playerid, Float(x), Float(y), Float(z));
};

/**
 * Retorna a posição atual do jogador.
 * @param playerid - ID do jogador
 * @returns Objeto com x, y, z
 */
export const GetPlayerPos = (playerid: number): { x: number, y: number, z: number } => {
    const x = Ref(0.1), y = Ref(0.1), z = Ref(0.1);
    Native.GetPlayerPos(playerid, x.$, y.$, z.$);
    return { x: Number(x), y: Number(y), z: Number(z) };
};

/**
 * Define o ângulo do jogador.
 * @param playerid - ID do jogador
 * @param angle - Ângulo em graus
 */
export const SetPlayerFacingAngle = (playerid: number, angle: number): void => {
    Native.SetPlayerFacingAngle(playerid, Float(angle));
};

/**
 * Retorna o ângulo atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerFacingAngle = (playerid: number): number => {
    const angle = Ref(0.1);
    Native.GetPlayerFacingAngle(playerid, angle.$);
    return Number(angle);
};

/**
 * Define o interior do jogador.
 * @param playerid - ID do jogador
 * @param interior - ID do interior
 */
export const SetPlayerInterior = (playerid: number, interior: number): void => {
    Native.SetPlayerInterior(playerid, interior);
};

/**
 * Retorna o interior atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerInterior = (playerid: number): number => {
    return Native.GetPlayerInterior(playerid);
};

/**
 * Define o virtual world do jogador.
 * @param playerid - ID do jogador
 * @param world - ID do virtual world
 */
export const SetPlayerVirtualWorld = (playerid: number, world: number): void => {
    Native.SetPlayerVirtualWorld(playerid, world);
};

/**
 * Retorna o virtual world atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerVirtualWorld = (playerid: number): number => {
    return Native.GetPlayerVirtualWorld(playerid);
};

// ========================== Stats ==========================

/**
 * Define a vida do jogador.
 * @param playerid - ID do jogador
 * @param health - Valor da vida (0-100)
 */
export const SetPlayerHealth = (playerid: number, health: number): void => {
    Native.SetPlayerHealth(playerid, Float(health));
};

/**
 * Retorna a vida atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerHealth = (playerid: number): number => {
    const health = Ref(0.1);
    Native.GetPlayerHealth(playerid, health.$);
    return Number(health);
};

/**
 * Define a armadura do jogador.
 * @param playerid - ID do jogador
 * @param armour - Valor da armadura (0-100)
 */
export const SetPlayerArmour = (playerid: number, armour: number): void => {
    Native.SetPlayerArmour(playerid, Float(armour));
};

/**
 * Retorna a armadura atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerArmour = (playerid: number): number => {
    const armour = Ref(0.1);
    Native.GetPlayerArmour(playerid, armour.$);
    return Number(armour);
};

/**
 * Define a skin do jogador.
 * @param playerid - ID do jogador
 * @param skinid - ID da skin
 */
export const SetPlayerSkin = (playerid: number, skinid: number): void => {
    Native.SetPlayerSkin(playerid, skinid);
};

/**
 * Retorna a skin atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerSkin = (playerid: number): number => {
    return Native.GetPlayerSkin(playerid);
};

/**
 * Define o score do jogador.
 * @param playerid - ID do jogador
 * @param score - Valor do score
 */
export const SetPlayerScore = (playerid: number, score: number): void => {
    Native.SetPlayerScore(playerid, score);
};

/**
 * Retorna o score atual do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerScore = (playerid: number): number => {
    return Native.GetPlayerScore(playerid);
};

/**
 * Retorna o ping do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerPing = (playerid: number): number => {
    return Native.GetPlayerPing(playerid);
};

/**
 * Verifica se o jogador está conectado.
 * @param playerid - ID do jogador
 */
export const IsPlayerConnected = (playerid: number): boolean => {
    return Boolean(Native.IsPlayerConnected(playerid));
};

/**
 * Verifica se o jogador está em algum veículo.
 * @param playerid - ID do jogador
 */
export const IsPlayerInAnyVehicle = (playerid: number): boolean => {
    return Boolean(Native.IsPlayerInAnyVehicle(playerid));
};

/**
 * Verifica se o jogador está num veículo específico.
 * @param playerid - ID do jogador
 * @param vehicleid - ID do veículo
 */
export const IsPlayerInVehicle = (playerid: number, vehicleid: number): boolean => {
    return Boolean(Native.IsPlayerInVehicle(playerid, vehicleid));
};

// ========================== Nome ==========================

/**
 * Retorna o nome do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerName = (playerid: number): string => {
    const name = Ref("");
    Native.GetPlayerName(playerid, name.$, 24);
    return String(name);
};

/**
 * Define o nome do jogador.
 * @param playerid - ID do jogador
 * @param name - Novo nome
 */
export const SetPlayerName = (playerid: number, name: string): void => {
    Native.SetPlayerName(playerid, name);
};

/**
 * Retorna o IP do jogador.
 * @param playerid - ID do jogador
 */
export const GetPlayerIp = (playerid: number): string => {
    const ip = Ref("");
    Native.GetPlayerIp(playerid, ip.$, 16);
    return String(ip);
};

// ========================== Kick / Ban ==========================

/**
 * Kicka o jogador do servidor.
 * @param playerid - ID do jogador
 */
export const Kick = (playerid: number): void => {
    Native.Kick(playerid);
};

/**
 * Bane o jogador do servidor.
 * @param playerid - ID do jogador
 */
export const Ban = (playerid: number): void => {
    Native.Ban(playerid);
};

/**
 * Bane o jogador com uma mensagem.
 * @param playerid - ID do jogador
 * @param reason - Motivo do ban
 */
export const BanEx = (playerid: number, reason: string): void => {
    Native.BanEx(playerid, reason);
};

// ========================== Câmera ==========================

/**
 * Define a câmera atrás do jogador.
 * @param playerid - ID do jogador
 */
export const SetCameraBehindPlayer = (playerid: number): void => {
    Native.SetCameraBehindPlayer(playerid);
};

/**
 * Define a posição da câmera do jogador.
 * @param playerid - ID do jogador
 * @param x - Coordenada X
 * @param y - Coordenada Y
 * @param z - Coordenada Z
 */
export const SetPlayerCameraPos = (playerid: number, x: number, y: number, z: number): void => {
    Native.SetPlayerCameraPos(playerid, Float(x), Float(y), Float(z));
};

/**
 * Define o ponto de mira da câmera do jogador.
 * @param playerid - ID do jogador
 * @param x - Coordenada X
 * @param y - Coordenada Y
 * @param z - Coordenada Z
 */
export const SetPlayerCameraLookAt = (playerid: number, x: number, y: number, z: number): void => {
    Native.SetPlayerCameraLookAt(playerid, Float(x), Float(y), Float(z), 2);
};

// ========================== Armas ==========================

/**
 * Dá uma arma ao jogador.
 * @param playerid - ID do jogador
 * @param weaponid - ID da arma
 * @param ammo - Quantidade de munição
 */
export const GivePlayerWeapon = (playerid: number, weaponid: number, ammo: number): void => {
    Native.GivePlayerWeapon(playerid, weaponid, ammo);
};

/**
 * Remove todas as armas do jogador.
 * @param playerid - ID do jogador
 */
export const ResetPlayerWeapons = (playerid: number): void => {
    Native.ResetPlayerWeapons(playerid);
};

// ========================== Drunk Level ==========================

/**
 * Define o nível de embriaguez do jogador (afeta a câmera).
 * @param playerid - ID do jogador
 * @param level - Nível (0 = sóbrio, 2000+ = bêbado)
 */
export const SetPlayerDrunkLevel = (playerid: number, level: number): void => {
    Native.SetPlayerDrunkLevel(playerid, level);
};

// ========================== Spawn ==========================

/**
 * Spawna o jogador.
 * @param playerid - ID do jogador
 */
export const SpawnPlayer = (playerid: number): void => {
    Native.SpawnPlayer(playerid);
};