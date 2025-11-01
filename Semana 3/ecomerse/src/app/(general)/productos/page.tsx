'use client'
import React from 'react'
import NavBar from '../../Componentes/NavBar'
import { useContextCarrito } from '../../Providers/ProviderProducto'
import Producto from '../../Componentes/Producto'
import BtnAgregar from '../../Componentes/BtnAgregar'

export default function page() {

  const { producto ,agregarCarrito} = useContextCarrito()
  return (

    <div className='container'>
      <div className='row'>
        { 
          producto.map((item) => (           
            <div className="col-md-3">
             <Producto producto={item} key={item.id}></Producto>
             <BtnAgregar producto={item}></BtnAgregar>
             </div>
          
          ))
        }
      </div>

    </div>

  )
}
