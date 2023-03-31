import { pool } from "../dbconect.js";

export const indexRouter= async (req,res)=>{
    const [result] = await pool.query('SELECT * FROM Registros.users;')
    res.json(result[0])  
}