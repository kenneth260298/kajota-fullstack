const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
    return res.send('Aplicacion Web')
})

app.listen(port, () => {
    console.log(`API corriendo en http://localhost:${port}`)
})