'use client'
import { useContextSaludo } from '../Providers/ProviderSaludo'

export default function Saludo2() {

  const {nombre, cambiarNombre}=useContextSaludo();


  return (
    <div>
        Saludo a la persona desde componente 2: {nombre}

        <button className='btn btn-info' onClick={()=>cambiarNombre('Cristian Mendoza')}> Cambiar nombre</button>
    </div>
  )
}
