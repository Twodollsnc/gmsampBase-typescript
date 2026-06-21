/* ============================================================================ *
 * Kainure - Money Helper                                                        *
 * ================================= About ==================================== *
 * Helper completo para manipulação de dinheiro no SA-MP via Kainure.           *
 * Resolve o bug de overflow do Pawn (limite de ~2.1 bilhões) armazenando       *
 * o valor real em JavaScript e exibindo o limite na HUD nativa do SA-MP.       *
 * ============================================================================ */

const MAX_SAMP_MONEY = 999999999; // Limite visual da HUD do SA-MP
const playerMoneyMap = new Map<number, number>();

// ========================== Internas ==========================

/**
 * Sincroniza o dinheiro visual na HUD do SA-MP com o valor real.
 * @param playerid - ID do jogador
 */
const syncHud = (playerid: number): void => {
    const real = playerMoneyMap.get(playerid) || 0;
    Native.ResetPlayerMoney(playerid);
    Native.GivePlayerMoney(playerid, Math.min(real, MAX_SAMP_MONEY));
};

// ========================== Funções Principais ==========================

/**
 * Inicializa o dinheiro do jogador ao conectar.
 * Deve ser chamado no OnPlayerConnect.
 * @param playerid - ID do jogador
 * @param initialAmount - Valor inicial (padrão 0)
 */
export const InitPlayerMoney = (playerid: number, initialAmount: number = 0): void => {
    playerMoneyMap.set(playerid, initialAmount);
    syncHud(playerid);
};

/**
 * Limpa o dinheiro do jogador ao desconectar.
 * Deve ser chamado no OnPlayerDisconnect.
 * @param playerid - ID do jogador
 */
export const ClearPlayerMoney = (playerid: number): void => {
    playerMoneyMap.delete(playerid);
};

/**
 * Dá dinheiro ao jogador. Suporta valores acima de 2 bilhões.
 * @param playerid - ID do jogador
 * @param amount - Valor a ser adicionado
 */
export const GivePlayerMoney = (playerid: number, amount: number): void => {
    const current = playerMoneyMap.get(playerid) || 0;
    playerMoneyMap.set(playerid, current + amount);
    syncHud(playerid);
};

/**
 * Define o dinheiro do jogador. Suporta valores acima de 2 bilhões.
 * @param playerid - ID do jogador
 * @param amount - Valor a ser definido
 */
export const SetPlayerMoney = (playerid: number, amount: number): void => {
    playerMoneyMap.set(playerid, amount);
    syncHud(playerid);
};

/**
 * Retorna o dinheiro real do jogador (sem limite de 2 bilhões).
 * @param playerid - ID do jogador
 */
export const GetPlayerMoney = (playerid: number): number => {
    return playerMoneyMap.get(playerid) || 0;
};

/**
 * Remove dinheiro do jogador.
 * @param playerid - ID do jogador
 * @param amount - Valor a ser removido
 * @returns false se o jogador não tiver saldo suficiente
 */
export const TakePlayerMoney = (playerid: number, amount: number): boolean => {
    const current = playerMoneyMap.get(playerid) || 0;

    if (current < amount)
        return false;

    playerMoneyMap.set(playerid, current - amount);
    syncHud(playerid);
    return true;
};

/**
 * Reseta o dinheiro do jogador para 0.
 * @param playerid - ID do jogador
 */
export const ResetPlayerMoney = (playerid: number): void => {
    playerMoneyMap.set(playerid, 0);
    Native.ResetPlayerMoney(playerid);
};

/**
 * Verifica se o jogador tem saldo suficiente.
 * @param playerid - ID do jogador
 * @param amount - Valor a verificar
 */
export const HasPlayerMoney = (playerid: number, amount: number): boolean => {
    return (playerMoneyMap.get(playerid) || 0) >= amount;
};

/**
 * Formata o dinheiro do jogador em string legível (ex: $1,000,000,000).
 * @param playerid - ID do jogador
 */
export const FormatPlayerMoney = (playerid: number): string => {
    const amount = playerMoneyMap.get(playerid) || 0;
    return `$${amount.toLocaleString('en-US')}`;
};