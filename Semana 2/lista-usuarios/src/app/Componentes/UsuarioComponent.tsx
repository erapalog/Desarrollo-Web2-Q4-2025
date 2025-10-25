import React from 'react'
import { UsuarioProps } from '../Modelos/UsarioProps'
import { Usuario } from '../Modelos/Usuarios'


export default function UsuarioComponent({listaUsuario}:UsuarioProps) {
  return (
    <div>
        <h5>Listado de usuarios agregados</h5>

        <table className='table'>
            <thead>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
            </thead>
            <tbody>
                {
                    listaUsuario.map((item:Usuario)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.correo}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
