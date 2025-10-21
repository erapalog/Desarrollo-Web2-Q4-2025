import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function Saludo2(props: Persona) {
    return (
        <div>

            Saludo Personas: <br />
            Identificacoin: {props.id} <br />
            Nombre: {props.nombre} <br />
            Apellido: {props.apellido} <br />
            Edad: {props.edad} <br />
            Genero: {props.genero} <br />

        </div>
    )
}
