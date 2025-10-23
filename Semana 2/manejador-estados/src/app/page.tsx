import Image from "next/image";
import { Tarjeta } from "./Modelos/Tarjeta";
import TarjetaComponent from "./Componentes/TarjetaComponent";
import HookUseState from "./Componentes/HookUseState";
import FormularioContador from "./Componentes/FormularioContador";

export default function Home() {

  let tarjetas:Tarjeta[]=[
    {
      nombre:'Raul Perez',
      ocupación:'Desarrollador',
      pais:'Honduras'
    },
    {
      nombre:'Maria Garcia',
      ocupación:'UX/UI',
      pais:'Mexico'
    },
    {
      nombre:'ANdrea Lopez',
      ocupación:'Desarrollador',
      pais:'Honduras'
    },
    {
      nombre:'Ana Juares',
      ocupación:'QA',
      pais:'Guatemal'
    },
    {
      nombre:'Luis Rodriguez',
      ocupación:'Desarrollador',
      pais:'Honduras'
    },

  ]
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
       {
        tarjetas.map((item:Tarjeta)=>(
            <TarjetaComponent key={item.nombre} nombre={item.nombre} ocupación={item.ocupación} pais={item.pais} ></TarjetaComponent>
        ))
       }
      
      <HookUseState></HookUseState>

      <FormularioContador></FormularioContador>
    
      </main>
    </div>
  );
}
