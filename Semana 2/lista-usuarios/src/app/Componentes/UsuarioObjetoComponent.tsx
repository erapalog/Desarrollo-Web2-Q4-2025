import React from 'react'
import { Usuario } from '../Modelos/Usuarios'

export default function UsuarioObjetoComponent(props:Usuario) {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.correo}</td>
    </tr>
  )
}
