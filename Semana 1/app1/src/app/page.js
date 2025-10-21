import Image from "next/image";

export default function Home() {


  var nombre='Pedridito';
  let  apellido;
  const color='rojo'

  console.log(nombre)

  nombre= 10+15;

  console.log('La suma es' ,nombre)

  nombre= [2,1,2,3,4]

  for(let x of nombre)
      console.log(x)


 

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
       <h1>Primera aplicacion en Next Js</h1>
      </main>
      
    </div>
  );
}
