import mysql, { Pool } from 'mysql2/promise';

export const db: Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',/*coloque a senha do mysql */
    database: 'ServerSamp',
    waitForConnections: true,
    connectionLimit: 10,
});