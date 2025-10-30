'use client'
import React from 'react'
import { useContextCarrito } from '../../Providers/ProviderProducto'

export default function page() {

  const { producto } = useContextCarrito()
  return (
        <div className='container'>
      <div className='row'>

      <div className='col-md-8'>

      </div>

      <div className='col-md-4'>
         {
          producto.map((item) => (

            <div className='col-md-3' key={item.id}>

              <div className='card' >
                <div className='card-header'>
                  {item.nombreProducto}
                </div>
                <div className='card-body'>
                  Precio Producto: {item.precioProducto} <br />
                  ISV: {item.isvProducto}


                </div>
              </div>
            </div>


          ))
        }

      </div>

       
      </div>

    </div>
  )
}
