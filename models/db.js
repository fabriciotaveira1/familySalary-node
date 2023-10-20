const Sequelize = require('sequelize');

const conn = new Sequelize("salarioFamilia", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
} );

conn.authenticate()
.then(function(){
    console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch(function(){
    console.log('Erro! Conexão com o banco de dados não realizada');
})

module.exports = conn;
