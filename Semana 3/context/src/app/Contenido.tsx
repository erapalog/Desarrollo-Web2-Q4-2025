'use client'
import Saludo from "./Componentes/Saludo";
import { useContextSaludo } from "./Providers/ProviderSaludo";
import Saludo2 from "./Componentes/Saludo2";
import Saludo3 from "./Componentes/Saludo3";

export default function Contenido() {

  const {cambiarNombre}=useContextSaludo();

  return (
    <>
      <h2>Manejo de estados con Context</h2>

      <button className="btn btn-success" type="button" onClick={()=>cambiarNombre('Juan Perez')}>Cambiar Nombre</button>

      <Saludo />
      <Saludo2 />

      <Saludo3></Saludo3>
    </>
  );
}

