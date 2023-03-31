import{config} from 'dotenv'

config()

export const PORT=process.env.PORT ||3000
export const DB_PORT=process.env.DB_PORT ||3306
export const DB_USER=process.env.DB_USER ||'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || 'root'
export const BD_DATABASE=process.env.BD_DATABASE || 'Registros'