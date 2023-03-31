import { pool } from "../dbconect.js";

export const indexRouter= async (req,res)=>{
    const [result] = await pool.query('SELECT * FROM registros.users;')
    res.json(result[0])  
}