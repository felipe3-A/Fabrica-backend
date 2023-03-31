import { pool } from '../dbconect.js'


export const getUser = async(req, res) =>{
   try {
    const rows = await pool.findAll()
    res.json(rows)
    console.log(rows)
   } catch (error) {
    res.json({message: error.message})
   }
    }

    export const postUser= async(req, res) =>{
        res.send('User create')
    }
    export const putUser= async(req, res) =>{
        res.send('User update')
    }
    export const deleteUser= async(req, res) =>{
        res.send('User delete')
    }
    export const getUser1= async(req, res) =>{
        res.send('User 1')
    }