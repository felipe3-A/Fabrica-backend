import { pool } from '../dbconect.js'


export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    } catch (error) { 
        return res.status(500).json({
            message: error
        })
    }
}

export const postUser = async (req, res) => {
    const { name, city, rol } = req.body
    const [rows] = await pool.query('INSERT INTO users (name, city, rol) VALUES (?,?,?)', [name, city, rol])
    res.send({
        id: rows.insertId,
        name,
        city,
        rol
    })
}

export const putUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, city, rol } = req.body
        const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), city = IFNULL(?, city), rol = IFNULL(?, rol) WHERE id=?',
        [name, city, rol, id])
    
    if(result.affectedRows === 0) return res.status(404).json({
        mensae: 'user no encontrado'
    })
    const [rows] = await pool.query('SELECT * FROM users WHERE id=?', [id])
    res.jon(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: error
            })
    }
}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "Usuario no Encontrado" });
        }
        return res.status(200).json({ message: "Usuario Borrado" });
    
      } catch (error) {
        return res.status(500).json({ error});
      }
}
export const getUser1 = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?',[req.params.id])
        if (rows.length <= 0) return res.status(404).json({
        mensaje: 'usuario no encontrado'
    })
    // muestra el registro con el id ingresado
    res.json(rows[0])
    }catch(error) { // si algo sale mal
        return res.status(500).json({
        message:error
        })
    }
}