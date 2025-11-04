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


    //fetch, axios, ajax 

    async function cargarProducto(){

        try {
            const resp= await fetch('http://localhost:5000/producto');
            const data= await resp.json()
            setProducto(data)

            console.log(producto)


        } catch (error) {
            console.log('ocurrio un error al invocar el sevicio')
        }
    }

    useEffect(() => {
        cargarProducto();

    }, []);


    useEffect(()=>{
        console.log(producto)
    },[producto])

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