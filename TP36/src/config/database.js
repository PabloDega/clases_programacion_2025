import mysql from "mysql2/promise";

// pool de conexiones
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export const query = async(sql) => {
    try{
        const resp = await pool.query(sql);
        return resp;
    } catch(err) {
        console.error(`Error en query: ${err.msg}`);
        throw new Error("Error en query a BD");
    }
}