import React from 'react'
import { useContextSaludo } from '../Providers/ProviderSaludo'

export default function Saludo3() {

    const {cambiarNombre}=useContextSaludo()
  return (
    <div>
        <button type='button' className='btn btn-info' onClick={()=>cambiarNombre('Allan Garcia')}> cambiarNombre</button>
    </div>
  )
}
