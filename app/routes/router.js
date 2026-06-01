const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
router.get("/", (req, res) => {
   res.render("pages/index", {
       erros: null,
       retorno: null,
       valores: {
           dia: ""
       }
   });
});
router.post(
   "/classificar",
   [
       body("dia")
           .notEmpty().withMessage("O dia é obrigatório.")
           .isInt({ min: 1, max: 7 }).withMessage("Digite um número entre 1 e 7.")
   ],
   (req, res) => {
       const erros = validationResult(req);
       if (!erros.isEmpty()) {
           return res.render("pages/index", {
               erros: erros.array(),
               retorno: null,
               valores: {
                   dia: req.body.dia
               }
           });
       }
       let dia = parseInt(req.body.dia);
       let categoria;
       if (dia == 1) {
           categoria = "Domingo";
       } else if (dia == 2) {
           categoria = "Segunda";
       } else if (dia == 3) {
           categoria = "Terça";
       } else if (dia == 4) {
           categoria = "Quarta";
       } else if (dia == 5) {
           categoria = "Quinta";
       } else if (dia == 6) {
           categoria = "Sexta";
       } else if (dia == 7) {
           categoria = "Sábado";
       }
       let objJson = {
           categoria: categoria
       };
       res.render("pages/index", {
           erros: null,
           retorno: objJson,
           valores: {
               dia: req.body.dia
           }
       });
   }
);
module.exports = router;
