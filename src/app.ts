import express, { response } from 'express';
import path = require("path");

const app = express();

app.use('/', express.static(__dirname + '/'))

app.get('/',(req,res) => {
    res.sendFile('index.html', {root: path.join(__dirname, './')});
});

app.post('/',function(req,res,next){
    res.redirect('/');
});

app.listen(5000, () => console.log('Server running'));

