const express = require('express')
const router = express.Router()
const Cadastro = require('./Cadastro')


router.get('/novo-cadastro', (req, res) => {
    res.render('cadcadastro')
})

router.get('/editar-cadastro/:id', (req, res) => {
    let cadastroId = req.params.id

    Cadastro.findByPk(cadastroId).then(cadastro => {
        //res.json(pergunta)
        res.render('editcadastro', { cadastro: cadastro })
    }).catch(erro => {
        console.log(erro)
    })

})
router.post('/salvar-cadastro', (req, res) => {
    let f_nome = req.body.f_nome
    let f_email = req.body.f_email

    Cadastro.create({
        nome: f_nome,
        email: f_email
    }).then(() => {
        res.redirect('/')
    }).catch(erro => {
        console.log(erro)
    })

})


router.post('/update-cadastro', (req, res) => {
    let { f_nome, f_email, f_id } = req.body

    //res.send(f_id+'</br>'+f_titulo +'</br>'+ f_descricao)
    //UPDATE NOMEDATABELA SET CAMPO=NOVOVALOR WHERE ID=ID 

    Cadastro.update({
        nome: f_nome,
        email: f_email
    }, { where: { id: f_id } }).then(()=>{
        res.redirect('/')
    }).catch(erro =>{
        console.log(erro)
    })

})

module.exports = router