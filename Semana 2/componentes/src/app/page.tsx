import Image from "next/image";
import Saludo from "./Components/Saludo";
import Saludo2 from "./Components/Saludo2";
import { Persona } from "./Modelos/Persona";

export default function Home() {

  let nombre: string = "Maria 2";
  let apellido: string = 'Garcia';


  let listaPersona: Persona[] = [{
    id:3,
    nombre: 'Mario',
    apellido: 'Lopez',
    edad: 80,
    genero: 'M'
  },
  {
    id:4,
    nombre: 'Ana',
    apellido: 'Gonzalez',
    edad: 80,
    genero: 'F'
  },
  {
    id:5,
    nombre: 'Andres',
    apellido: 'Lopez',
    edad: 80,
    genero: 'M'
  },
  {
    id:6,
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: 80,
    genero: 'M'
  },
  {
    id:7,
    nombre: 'Marcos',
    apellido: 'Bonilla',
    edad: 80,
    genero: 'M'
  }

  ]


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <h1>Trabajando con props</h1>


        <Saludo nombre={nombre} apellido={apellido}></Saludo>

        <Saludo2 nombre={nombre} apellido={apellido} edad={80} genero="M" id={1}></Saludo2>

        <Saludo2 nombre={nombre} apellido={apellido} edad={70} genero="F" id={2}></Saludo2>

        {
            listaPersona.map((item:Persona)=>(

              <Saludo2 key={item.id} 
                  id={item.id} 
                  nombre={item.nombre}
                   apellido={item.apellido} 
                   edad={item.edad} 
                   genero={item.genero}>
                
              </Saludo2>

            ))

        }

      </main>
    </div>
  );
}
