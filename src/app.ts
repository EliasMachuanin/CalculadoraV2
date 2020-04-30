import express, { response } from 'express';
import path = require("path");
import Calculadora from './Calculadora';
import Parser from './Parser';
import Contexto from './Contexto';
var body_parser = require('body-parser');

const app = express();

let c = new Calculadora()
let p = new Parser()

app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static('src'))

app.post('/',function(req,res,next){
    
    var entrada = req.body.textbox
    let newC = new Contexto(entrada)
    c.procesarNuevoElemento(p.evaluate(newC))
    console.log(c.resultado)
    console.log(entrada)
    res.redirect('/');
});

app.listen(5000, () => console.log('Server running'));