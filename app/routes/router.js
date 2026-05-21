const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index",{"retorno":null,"valores":{"dia":""}});
});


router.post("/classificar", (req, res)=>{

    //recuperar a idade do nadador
    let dia = parseInt(req.body.dia);

    //manipular os dados -> classificar
    if(dia == 1){
        var categoria = "Domingo";
    }else if(dia == 2){
        var categoria = "Segunda";
    }else if(dia == 3){
        var categoria = "Terça";
    }else if(dia == 4){
        var categoria = "Quarta";
    }else if(dia == 5 ){
        var categoria = "Quinta";
    }else if(dia == 6 ){
        var categoria = "Sábado";} 
    else {
        var categoria = "Dia invalido!!";
    }

    //formatação 
    let objJson = {"categoria":categoria};

    //envio dos dados para mescalr com o HTML
    res.render("pages/index",{"retorno":objJson,"valores":{"dia":req.body.dia}})

});


module.exports = router;