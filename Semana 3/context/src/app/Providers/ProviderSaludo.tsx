'use client'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../Modelos/ViewReact'
import {saludoPersona} from '../Context/ContextSaludo'
//1. props: React
//2. definir funcionalidaes que declare en context
//3. exportar el contexto (atributos, metodos, ...)

export default function ProviderSaludo({children}:ViewReact) {

 const [nombre, setNombre]=useState<string>('');

  function cambiarNombre(nombreParam:string){
    alert(nombreParam)
    setNombre(nombreParam)
  }

  return (
        <saludoPersona.Provider value={{nombre,setNombre,cambiarNombre}}>
                {children}
        </saludoPersona.Provider>

  )
}

export const useContextSaludo = () => {
    return useContext(saludoPersona)
}
