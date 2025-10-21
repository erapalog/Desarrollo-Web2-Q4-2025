import React from 'react'

export default function Saludo({nombre,apellido}:string) {
  
    return (
     <div>
        
        Saludo Personas: <br />
        Nombre: {nombre} <br />
        Apellido: {apellido} <br />

    </div>
  )
}
