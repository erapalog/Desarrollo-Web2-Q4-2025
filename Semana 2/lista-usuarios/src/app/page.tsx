'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Usuario } from "./Modelos/Usuarios";
import UsuarioComponent from "./Componentes/UsuarioComponent";
import UsuarioObjetoComponent from "./Componentes/UsuarioObjetoComponent";

export default function Home() {

  const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');


  function agregarUsuario(): void {

    const usuario: Usuario = {
      id: listaUsuario.length + 1,
      nombre: nombre,
      correo: correo
    };


    setListaUsuario([...listaUsuario, usuario]);

    alert('Usuario Agregado')

  }

  useEffect(() => {
    const usuario: Usuario = {
      id: 1,
      nombre: 'Ana Lopez',
      correo: 'ana@gmail.com'
    };


    setListaUsuario([...listaUsuario, usuario]);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="container">

          <h5>Registro de usuarios</h5>

          <form className="form">

            <input type="text" className="form-control" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /> <br />
            <input type="email" className="form-control" placeholder="ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)} /> <br />


            <button className="btn btn-success" type="button" onClick={agregarUsuario}>Guardar Usuario</button>

          </form> <br />

          <UsuarioComponent listaUsuario={listaUsuario}></UsuarioComponent> <br />



          <h4>Tabla creada con objetos</h4>
          <table className='table'>
            <thead>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
            </thead>
            <tbody>

              {
                listaUsuario.map((item: Usuario) => (
                  <UsuarioObjetoComponent key={item.id} id={item.id} nombre={item.nombre} correo={item.correo}></UsuarioObjetoComponent>
                ))
              }

            </tbody>
          </table>

        </div>

      </main>
    </div>
  );
}
