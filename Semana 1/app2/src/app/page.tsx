import Image from "next/image";

export default function Home() {

  var nombre:string='Pedrito';
  let suma:number=0
  let exitoso:boolean;

  let numeros: number[]=[]
  let numerosprimos: any[]=[]

  console.log(nombre)


  function multiplicar (a:number,b:number):number{
    return a*b;
  }


  console.log('El resultado de la multuplicacio es: ', multiplicar(2,3))


  type operaciones = 'suma' | 'resta' | 'division';

  const caluladora =(a: number, b: number, op: operaciones) =>{

    if(op==='suma')
      return a+b
    if(op==='resta')
       return a-b 
    if(op==='division' && b>0)
      return a/b 
  }


  console.log('El resultado de la operacion es: ', caluladora(2,5,'suma'))
  console.log('El resultado de la operacion es: ', caluladora(6,4,'resta'))
  console.log('El resultado de la operacion es: ', caluladora(10,2,'division'));

  const personaUno:Persona={
    nombre:'Juan',
    apellido:'Perez',
    edad:50,
    fechaNacimiento:'1990-09-10'
  }

  console.log(personaUno);

  const listaPersonas: Persona[]=[
    {
      nombre:'Ana',
      apellido:'Perez',
      edad:30,
      fechaNacimiento:'1996-09-09',
      genero:'Masculno'
    },
    {
      nombre:'Fran',
      apellido:'Gonazales',
      edad:30,
      fechaNacimiento:'1996-09-09'
    }

  ]

  for (let x of listaPersonas)
    console.log(x)




  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>Primera aplicacion creada en next con Tyoescrip</h1>
    

      </main>
   
    </div>
  );
}
