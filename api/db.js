const Sequelize = require('sequelize')

const sequelize = new Sequelize('bloco-de-notas', 'root','kungfumestre',{
    host: 'localhost',
    dialect:'mysql',
})
 ;
module.exports=sequelize