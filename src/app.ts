import express, { response } from 'express';
import path = require("path");
var body_parser = require('body-parser');

const app = express();

app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static('src'))

app.post('/',function(req,res,next){
    var entrada = req.body.textbox
    console.log(entrada)
    res.redirect('/');
});

app.listen(5000, () => console.log('Server running'));

