const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))

app.get('/ProductOverview', (req, res) => {
    res.send('../../ProductOverview/public/index.html')})

app.listen(port, () => console.log(`app listening on port ${port}!`))