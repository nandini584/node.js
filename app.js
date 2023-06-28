require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app= express();

const PORT= 5000 || process.env.PORT;

app.use(express.static('public'));

//Template Engine
app.use(expressEjsLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/route/main'))

app.listen(PORT,()=>{
    console.log("the sever is up and running");
})