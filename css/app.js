const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('./'));

app.get('/', (req, res) => res.send('index.html'))

app.listen(port)