import { pool } from '../dbconect.js'


export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Registros.users')
        res.send(rows)
    } catch (error) { // si algo sale mal
        return res.status(500).json({
            message: 'Estas Frito'
        })
    }
}

export const postUser = async (req, res) => {
    const { name, city, rol } = req.body
    const [rows] = await pool.query('INSERT INTO users (name, city, rol) VALUES (?,?,?)', [name, city, rol])
    res.send({ // muestra los datos ingresados como resultado del envio JSON
        id: rows.insertId,
        name,
        city,
        rol
    })
}

export const putUser = async (req, res) => {
    res.send('User update')
}
export const deleteUser = async (req, res) => {
    res.send('User delete')
}
export const getUser1 = async (req, res) => {
    res.send('User 1')
}