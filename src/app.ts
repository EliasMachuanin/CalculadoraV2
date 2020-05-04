import Calculadora from "./Calculadora";
import Parser from "./Parser";
import Contexto from "./Contexto";
import OperacionSuma from "./OperacionSuma";
import OperacionResta from "./OperacionResta";
import OperacionProducto from "./OperacionProducto";
import OperacionDivision from "./OperacionDivision";

var express = require ('express');
var response = require ('express');
var path = require("path");
var body_parser = require('body-parser');

const app = express();

let c = new Calculadora();
let p = new Parser();

app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static('src'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/',function(req,res){
    var entrada = req.body.textbox;
    let newC = new Contexto(entrada);
    c.procesarNuevoElemento(p.evaluate(newC));
    if(c.resultado!=null&&c.operacion==null){
        res.render('resultado',{salida: c.resultado});
        console.log(c.resultado)
    }
    else if(c.operacion!=null){
        if(c.operacion instanceof OperacionSuma){
            res.render('resultado',{salida: c.resultado.toString().concat(" +")});
        }
        else if(c.operacion instanceof OperacionResta){
            res.render('resultado',{salida: c.resultado.toString().concat(" -")});
        }
        else if(c.operacion instanceof OperacionProducto){
            res.render('resultado',{salida: c.resultado.toString().concat(" x")});
        }
        else if(c.operacion instanceof OperacionDivision){
            res.render('resultado',{salida: c.resultado.toString().concat(" /")});
        }
        
    }
    else{
        res.render('resultado',{salida: "SYNTAX ERROR"});
    }
    
});

app.listen(5011, () => console.log('Server running'));