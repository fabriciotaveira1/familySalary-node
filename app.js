const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path'); //Importing module path

app.use(bodyParser.urlencoded({ extended: false }));
//Configure middleware to serve static files from the 'public' folder
app.use(express.static('public'));
app.use(express.static('public/assets'));

const Beneficiary = require('./models/Beneficiary');

//GET route to serve the 'index.html' file
app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html', { root: 'public'}));
});

// Route GET for other page HTML
app.get('/pagina-funcionario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/html', 'employer.html'));
  });

//Route to handle form submission
app.post("/registerBeneficiary", async (req, res) => {
    const { nome, cpf, dataNascimento, endereco, telefone, email } = req.body;

    //Use sequelize to create a record in the database with the form data
    try {
        const newBeneficiary = await Beneficiary.create({
            email,
            nome,
            cpf,
            dataNascimento,
            endereco,
            telefone,
            
        });
        res.send("Beneficiário cadastrado com Sucesso!");
    }catch(error){
        res.status(500).send("Erro ao registrar o beneficiário." + error.message);
    }
})

app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080")
})