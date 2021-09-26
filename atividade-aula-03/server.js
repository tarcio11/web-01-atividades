const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (request, response) => {
  console.log(request.body);
  return response.send(`<h1>Usuário ${request.body.name} foi adicionado com sucesso</h1>`)
})

app.listen(3333, () => {
  console.log('Server is running in port:3333');
})