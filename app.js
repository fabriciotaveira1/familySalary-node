const express = require('express');
const app = express();

app.get("/", async (req, res) => {
    res.send("/index.html");
})

app.listen(8080, () =>{
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080")
})