const express = require('express')
const app = express()
const http = require('http').Server(app)
const Port = 8888

http.listen(Port, function (e) {
    (e) ? console.log(`Error: ${e}`): console.log(`Aplicación corriendo: http://localhost:${Port}/`)
})

app.use(express.static(__dirname + '/'))

app.get('/', function (req, res) {
    res.send('/')
})