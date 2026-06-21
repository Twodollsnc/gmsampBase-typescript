import mysql from 'mysql2/promise';
import { createTables } from './tables.js';

export const setupDatabase = async (): Promise<void> => {
    const tempDb: any = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',/*senha do mysql */
        waitForConnections: true,
        connectionLimit: 1,
    });

    await tempDb.query(`CREATE DATABASE IF NOT EXISTS ServerSamp`);
    await tempDb.end();
    await createTables();

    console.log('[DB]: Banco de dados verificado com sucesso.');
};