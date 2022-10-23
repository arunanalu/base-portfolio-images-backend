const express = require('express')
const cors = require('cors');
const userRouter = require('./src/routes/user.router');
const loginRouter = require('./src/routes/login.router');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express()
const port = 3000 || process.env.PORT

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) => res.send('API working'))

app.use(errorMiddleware)

app.listen(port, () => console.log(`app listening on port ${port}!`))