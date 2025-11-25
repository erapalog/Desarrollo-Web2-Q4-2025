const express = require("express");
const sequelize = require("./conexion/database");
const Empleado = require("./Modelos/Empleado");

const app = express();

app.use(express.json());

//metodo
//respose, request
//codigo de respuesta
// tabla

//select SUM(salary),department_id from empleado group by department_id

app.get("/sum-salario", async (req, resp) => {
  try {
    const resultado = await Empleado.findAll({
      attributes: [
        "department_id",
        [sequelize.fn("SUM", sequelize.col("salary")), "salario_total"],
      ],
      group: ["department_id"],
    });

    if (resultado.length > 0) {
      resp
        .status(200)
        .json({ mensaje: "registros encontrados", data: resultado });
    } else {
      resp
        .status(400)
        .json({ mensaje: "registros no encontrados", data: resultado });
    }
  } catch (error) {
    resp.status(500).json({ Mensaje: "Ocurrio un errr" + error });
  }
});

//select count(*), department_id, job_id from empleado group by  department_id, job_id

app.get("/cantidad-empleado-depto", async (req, resp) => {
  try {
    const resultado =await Empleado.findAll({
      attributes: [
        "department_id",
        "job_id",
        [sequelize.fn("COUNT", sequelize.col("*")), "total_empleados"],
      ],
      group: ["department_id", "job_id"],
    });

    if (resultado.length > 0) {
      resp
        .status(200)
        .json({ mensaje: "registros encontrados", data: resultado });
    } else {
      resp
        .status(400)
        .json({ mensaje: "registros no encontrados", data: resultado });
    }
  } catch (error) {
    resp.status(500).json({ Mensaje: "Ocurrio un errr" + error });
  }
});


//select max(salary), department_id from empleado where department_id=? group by department_id


app.get('/max-salary-depto/:department_id', async (req,resp)=>{

  const department_id= req.params.department_id

  try {

    const resultado= await Empleado.findAll({
      attributes:[
        'department_id',
        [sequelize.fn('MAX',sequelize.col('salary')),'salario_maximo']
      ],
      where:{department_id:department_id},
      group:['department_id']

    })


    if (resultado.length > 0) {
      resp
        .status(200)
        .json({ mensaje: "registros encontrados", data: resultado });
    } else {
      resp
        .status(400)
        .json({ mensaje: "registros no encontrados", data: resultado });
    }
  } catch (error) {
     resp.status(500).json({ Mensaje: "Ocurrio un errr" + error });
  }
})
app.listen(5000, () => {
  console.log("aplicacion ejecutando en puerto 5000");
});
