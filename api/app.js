const express = require('express');
const sequelize = require('./db');
// const req = require('express/lib/request');

const rotas = require("./rotas")


const app = express();
app.use(express.json());

app.use('/usuarios', rotas)


app.listen(1, async()=>{
const resbd = await sequelize.sync();
    
    console.log('servidor ta on-firee')
})
