import app from './app.js'


import { PORT } from './config.js'

import cors from'cors'



app.listen(PORT)
console.log('listening on port 3000')

app.use(cors())


