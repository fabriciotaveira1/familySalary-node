const conn = require('sequelize');
const db = require('./db');

const Beneficiary = db.define('Beneficiarios',{
    beneficiarioID: {
        type: conn.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true,
    },
    nome:{
        type: conn.STRING,
        allowNull: false,
    },
    cpf:{
        type: conn.STRING(11),
        allowNull: false,
    },
    dataNascimento:{
        type: conn.DATE,
        allowNull: false,
    },
    endereco:{
        type: conn.STRING,
        allowNull: false,
    },
    telefone:{
        type: conn.STRING(20),
        allowNull: true,
    },
    email:{
        type: conn.STRING,
        allowNull: false,
        unique: true,
    }
});

const Accounts = db.define('Contas', {
    contaId:{
        type: conn.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
    },
    beneficiarioId:{
        type: conn.INTEGER,
        
    }
})

//If not exists the table, he are created
//User.sync();

//Look if has some difference, if has, realize the alteration
//Beneficiary.sync();

module.exports = Beneficiary;