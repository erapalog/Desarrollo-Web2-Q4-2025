const {Sequelize}= require('sequelize')

const sequelize= new Sequelize(
    'empleados',
    'admin123',
    'admin123',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
        .then(()=> console.log('conectado correctamente'))
        .catch((e)=> console.log('Ocurrio un error'+2))

module.exports=sequelize;