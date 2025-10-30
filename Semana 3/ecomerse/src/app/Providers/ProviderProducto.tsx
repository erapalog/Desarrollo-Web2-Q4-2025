'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Producto } from '../Modelos/Producto'
import {contexCarrito} from '../Contexto/ContexCarrito'


//1. children
//2. definir la funcionalid de los metodos 
//3. exportar esas funcionales
export default function ProviderProducto({ children }: PlantillaReact) {

    const [producto, setProducto] = useState<Producto[]>([]);
    const [productosCarrito, setProductosCarrito]= useState<Producto[]>([]);

    useEffect(() => {

        let productosLista: Producto[] = [{
            id: 1,
            nombreProducto: 'papas',
            precioProducto: 12,
            imgProducto: '',
            isvProducto: 5
        },
        {
            id: 2,
            nombreProducto: 'cebollas',
            precioProducto: 15,
            imgProducto: '',
            isvProducto: 5
        },
        {
            id: 3,
            nombreProducto: 'zanahorias',
            precioProducto: 19,
            imgProducto: '',
            isvProducto: 5
        }];


        setProducto(productosLista)

    }, []);

    function agregarCarrito(producto:Producto){
        alert('Producto agregado al carrito');
        setProductosCarrito([...productosCarrito,producto]);
    }


    return (
        <contexCarrito.Provider value={{producto,productosCarrito,agregarCarrito}}>
            {children}
        </contexCarrito.Provider>
    )
}

export function useContextCarrito(){
    return useContext(contexCarrito)
}