import React from 'react'
import { Tarjeta } from '../Modelos/Tarjeta'

export default function TarjetaComponent(props: Tarjeta) {
    return (

        <>

            <div className='card'>
                <div className='card-header'>
                    Tarjeta de presentacion: {props.nombre}
                </div>
                <div className='card-body'>
                    Ocupacion: {props.ocupación} <br />
                    Pais: {props.pais}
                </div>

            </div> <br />

        </>

    )
}
