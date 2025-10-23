'use client'

import React, { useEffect, useState } from 'react'
import { Tarjeta } from '../Modelos/Tarjeta';

export default function HookUseState() {

  const [contador,setContador]=useState<number>(0);

  const [nombre, setNombre]= useState<string | null>('');

  const [listaTerjetas, setListaTarjetas]=useState<Tarjeta[] | null>(null);

  const[tarjetas, setTarjeta] =useState<Tarjeta | null>(null)



  function sumarContador():void{
        setContador(contador+1)

  }

  function restarContador(numeroRestar:number):void{
        if(contador==0)
            return

        setContador(contador-numeroRestar)
  }


  return (
    <div>
        El valor del Contador es: {contador} <br /> <br />


        <button className='btn btn-info' onClick={sumarContador}>Sumar Contador</button> <br /> <br />
        <button className='btn btn-danger' onClick={()=>restarContador(2)}>Restar Contador</button>
    </div>
  )
}
