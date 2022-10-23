const express = require('express')
const cors = require('cors');
const userRouter = require('./src/routes/user.router');

const app = express()
const port = 3000 || process.env.PORT

app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.use(userRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`app listening on port ${port}!`))