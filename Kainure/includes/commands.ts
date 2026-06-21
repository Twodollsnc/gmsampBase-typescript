/* ============================================================================ *
 * Kainure - Commands Helper                                                     *
 * ================================= About ==================================== *
 * Helper de comandos estilo ZCMD para SA-MP via Kainure.                       *
 * Sintaxe familiar para desenvolvedores vindos do Pawn/ZCMD.                  *
 *                                                                              *
 * Uso:                                                                         *
 *   CMD('ping', (playerid, params) => {                                        *
 *       SendClientMessage(playerid, -1, "Pong!");                              *
 *   });                                                                        *
 *                                                                              *
 *   // Ou com função separada:                                                 *
 *   function ping(playerid: number, params: string) {                         *
 *       SendClientMessage(playerid, -1, "Pong!");                              *
 *   }                                                                          *
 *   CMD('ping', ping);                                                         *
 * ============================================================================ */

type CommandCallback = (playerid: number, params: string) => void;

/**
 * Registra um comando no servidor estilo ZCMD.
 * @param name - Nome do comando (sem a barra)
 * @param callback - Função a ser executada quando o comando for usado
 *
 * @example
 * CMD('ping', (playerid, params) => {
 *     SendClientMessage(playerid, -1, "Pong!");
 * });
 */
export const CMD = (name: string, callback: CommandCallback): void => {
    Command(name, (playerid: number, params: string) => {
        callback(playerid, params);
    });
};

/**
 * Registra um alias para um comando existente.
 * @param name - Nome do comando original
 * @param aliases - Nomes alternativos
 *
 * @example
 * CMD('saudade', (playerid, params) => { ... });
 * CMD_ALIAS('saudade', 'sd', 'sauda');
 */
export const CMD_ALIAS = (name: string, ...aliases: string[]): void => {
    Alias_Command(name, ...aliases);
};

/**
 * Chama um comando programaticamente.
 * @param name - Nome do comando
 * @param params - Parâmetros do comando
 * @param playerid - ID do jogador (opcional)
 *
 * @example
 * CMD_CALL('kick', '1', playerid);
 */
export const CMD_CALL = (name: string, params: string = '', playerid: number = 0): void => {
    Call_Command(name, params, playerid);
};