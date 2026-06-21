import bcrypt from 'bcryptjs';
import { db } from '../data/connection.js';
import { GetPlayerName, GetPlayerIp } from '../../includes/player.js';

export const jogadorExiste = async (nome: string): Promise<boolean> => {
    const [rows]: any = await (db as any).query(
        'SELECT id FROM jogadores WHERE nome = ?', [nome]
    );
    return rows.length > 0;
};

export const verificarSenha = async (nome: string, senha: string): Promise<boolean> => {
    const [rows]: any = await (db as any).query(
        'SELECT senha FROM jogadores WHERE nome = ?', [nome]
    );
    if (rows.length === 0) return false;
    return bcrypt.compare(senha, rows[0].senha);
};

export const registrarJogador = async (playerid: number, senha: string): Promise<void> => {
    const nome = GetPlayerName(playerid);
    const ip   = GetPlayerIp(playerid);
    const hash = await bcrypt.hash(senha, 10);

    await (db as any).query(
        'INSERT INTO jogadores (nome, senha, ip) VALUES (?, ?, ?)',
        [nome, hash, ip]
    );
};