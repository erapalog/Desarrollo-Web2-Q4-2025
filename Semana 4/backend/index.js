const express=require('express');
const Producto = require('./Modelos/Producto');
var cors = require('cors')


const app= express()

app.use(cors())

app.use(express.json());



//CRUD

//GET -- > extraer informacion
//POST --> extraer informacion , insertar informacion
//PUT --> actualuzaizar informaicno
//DELETE --> eliminar


//request --> recibe del cliente --> json
//response --> lo que respondes

//codigos de respuesta

//500  --> error
//403 o 401 --> error autenticacion
//200 o 201 --> fue exitoso
//400 o 4022 --> No hay informacion 


app.get('/producto',async(req, resp)=>{
  
    try {

        //select *from productos

        const listaProducto= await Producto.findAll();

        if(listaProducto.length>0)
            resp.status(200).json(listaProducto)
        else
            resp.status(200).json({'mensaje':'Sin datos para mostrarr'})
        
    } catch (error) {
        resp.status(500).json({'error':'Ocurrrio un error con la peticion'+error })
    }
});

app.post('/producto', async (req,resp)=>{

    try {

        console.log(req.body);

        //insert into product() vales(?,?,?)

        const proudcto= await Producto.create(req.body)
        resp.status(200).json({'mensaje':'Producto creado'})

        
    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al insertar'+error})
    }
})



app.put('/producto/:id',async (req,resp)=>{

    try {

        //update producto set nombre, isve where id=2
        const idProducto= req.params.id;

        const [updated]=await Producto.update(req.body,{
            where: {id:idProducto}
        });

        if(updated)
            resp.status(200).json({mensaje:'regsitro actualizado'})
        else
            resp.status(400).json({mensaje:'No se encontro registro para actualizar'})
        
    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al actualizar'+error})
    }
})

app.delete('/producto/:id',async(req,resp)=>{
    try {

        const idProducto= req.params.id;

        //delete from producto where id:1

        const deleted= await Producto.destroy({
            where:{id:idProducto}
        })

        if(deleted)
            resp.status(200).json({mensaje:'Eliminado correctamente'})
        else
             resp.status(400).json({mensaje:'No se encontro registro para eliminar'})

    } catch (error) {
        resp.status(500).json({'error':'ocurrio un error al eliminar'+error})
    }
})


app.listen(5000,()=>{
    console.log('Aplicacion ejecutando en puerto 5000')
});