import { createPool } from "mysql2/promise";
import { DB_PASSWORD, DB_PORT, DB_USER ,DB_DATABASE} from "./config.js";

export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database:DB_DATABASE,
})

