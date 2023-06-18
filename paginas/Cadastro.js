const sequelize = require('sequelize')
const conn = require('../database/conexao')

const Cadastro = conn.define('cadastro', {
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
})

//Cadastro.sync({ force: true })

module.exports = Cadastro