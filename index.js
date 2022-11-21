const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Alice Silvestre",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;

app.get("/materias", (req, res )=> {
    let materias  = [ {
                    disciplina : "Topicos Especiais",
                    curso : "ADS",
                    professor: "Craudio"
        
    }]
    res.send(materias);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})
