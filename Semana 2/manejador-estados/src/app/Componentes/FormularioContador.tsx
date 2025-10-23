'use client'
import React, { useEffect, useState } from 'react'

export default function FormularioContador() {

    const [texto, setTexto] = useState<string>('');

    const [contadorLetras, setContadorLetras]= useState<number>(0);

    const [color,setColorTexto]=useState<string>('');



    //escucha cuando el componente ha sido cargado
    useEffect(() => {
        console.log('El componente fue cargado');

        //barra de carga
        //llamado a un api
        //mostrar etc

    }, []);


    useEffect(()=>{

        setContadorLetras(texto.length);

        if(contadorLetras<10)
            setColorTexto('yellow')
        else if(contadorLetras>10 && contadorLetras<50)
            setColorTexto('green')
        else 
            setColorTexto('red')

        

        //llama el api de busqueda
        //llama otro componente
        //mostrame el resultado de la busqueda

    },[texto]);



    function manejarTexto(e:any):void{
            setTexto(e.target.value)
    }



    return (
        <div>
            <h1>Contador de palabras</h1>

            <textarea name="" id="" className='form-control' rows={10} cols={10} placeholder='ingresar texto'
                value={texto}
                onChange={manejarTexto}
                style={{color}}

            >

            </textarea>

            <h3>Cantidad de letras {contadorLetras}</h3>
        </div>
    )
}
