import Calculadora from "./Calculadora";
import Parser from "./Parser";
import Contexto from "./Contexto";
import OperacionSuma from "./OperacionSuma";
import OperacionResta from "./OperacionResta";
import OperacionProducto from "./OperacionProducto";
import OperacionDivision from "./OperacionDivision";

const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();
  
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
let c = new Calculadora();
let p = new Parser();
app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static('img'));

app.get('/', function(req, res) {
    if(c.resultado!=null&&c.operacion==null){
        res.render('index', {locals: {salida: c.resultado}});
    }
    else if(c.operacion!=null){
        if(c.operacion instanceof OperacionSuma){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" +")}});
        }
        else if(c.operacion instanceof OperacionResta){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" -")}});
        }
        else if(c.operacion instanceof OperacionProducto){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" *")}});
        }
        else if(c.operacion instanceof OperacionDivision){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" /")}});
        }
        
    }
    else{
        res.render('index', {locals: {salida: 0}});
    }
    
  });



app.post('/',function(req,res){
    var entrada = req.body.textbox;
    let newC = new Contexto(entrada);
    c.procesarNuevoElemento(p.evaluate(newC));
    if(c.resultado!=null&&c.operacion==null){
        res.render('index', {locals: {salida: c.resultado}});
    }
    else if(c.operacion!=null){
        if(c.operacion instanceof OperacionSuma){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" +")}});
        }
        else if(c.operacion instanceof OperacionResta){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" -")}});
        }
        else if(c.operacion instanceof OperacionProducto){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" *")}});
        }
        else if(c.operacion instanceof OperacionDivision){
            res.render('index',{locals:{salida: c.resultado.toString().concat(" /")}});
        }
        
    }
    else{
        res.render('index', {locals: {salida: 0}});
    }
});

app.listen(5011, () => console.log('Server running'));
