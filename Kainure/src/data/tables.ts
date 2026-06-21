import { db } from './connection.js';

export const createTables = async (): Promise<void> => {
    await (db as any).query(`
        CREATE TABLE IF NOT EXISTS jogadores (
            id        INT AUTO_INCREMENT PRIMARY KEY,
            nome      VARCHAR(24) NOT NULL UNIQUE,
            senha     VARCHAR(255) NOT NULL,
            ip        VARCHAR(16),
            criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
};