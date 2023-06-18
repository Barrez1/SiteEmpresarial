const express = require('express')
const app = express()
const cadastrocontroller = require('./paginas/cadastrocontroller')
const BodyParser = require('body-parser')
const porta = process.env.PORT || 9000
const conn = require('./database/conexao')
const Cadastro = require('./paginas/Cadastro')


conn.authenticate().then(() => {
    console.log('\n Banco Conectado!!')
}).catch((erro) => {
    console.log(erro)
})

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs','site')

app.use('/', cadastrocontroller)

app.get('/', (req, res) => {
    //res.render('home')
    Cadastro.findAll().then(cadastro => {
        res.render('home', { cadastro: cadastro })
    }).catch(erro => {
        console.log(erro)
    })
})



app.listen(porta, () => {
    console.log('\nServidor Inicializado!!')
})