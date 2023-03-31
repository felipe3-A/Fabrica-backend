import  express  from "express";
import userRoutes from './routes/userRoutes.js'
import  indexRouter  from "./routes/indexRouter.js";
const app = express()

app.use(express.json())

app.use('/api',userRoutes)
app.use('/api',indexRouter)

export default app