import { createContext } from "react";

//plantilla de objetos que quiero utilizar
export const saludoPersona= createContext({
    nombre:'',
    setNombre: (nombre:string)=>{},
    cambiarNombre:(nombre:string)=>{}
})