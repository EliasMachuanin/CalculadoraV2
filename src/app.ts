import Calculadora from "./Calculadora";
import Parser from "./Parser";
import Contexto from "./Contexto";

var express = require ('express');
var response = require ('express');
var path = require("path");
var body_parser = require('body-parser');

const app = express();

let c = new Calculadora();
let p = new Parser();

app.use(body_parser.urlencoded({extended:true}));

//app.use('/', express.static('src'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/',function(req,res){
    var entrada = req.body.textbox;
    let newC = new Contexto(entrada);
    c.procesarNuevoElemento(p.evaluate(newC));
    res.render('resultado',{salida: c.resultado});
});

app.listen(5000, () => console.log('Server running'));