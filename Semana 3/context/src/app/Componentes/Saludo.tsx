import React from 'react'
import { SaludoPersona } from '../Modelos/SaludoPersona'
import { useContextSaludo } from '../Providers/ProviderSaludo'

export default function Saludo() {

  const { nombre, setNombre, cambiarNombre } = useContextSaludo();

  return (
    <div>

      <form className='form-control'>

        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </form>
      
      Saludo a la persona desde componente 1: {nombre}

      <button className='btn btn-warning' onClick={() => cambiarNombre(nombre)}>cambiarNombre</button>
    </div>
  )
}
