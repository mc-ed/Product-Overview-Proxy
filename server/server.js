const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.static('./public'))
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get('/ProductOverview', (req, res) => {
    res.send('../../ProductOverview/public/index.html')})

app.listen(port, () => console.log(`app listening on port ${port}!`))