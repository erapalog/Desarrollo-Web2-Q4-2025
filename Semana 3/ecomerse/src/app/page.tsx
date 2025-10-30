import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="container">

          <form className="form-control">
            <h1>Inicio de sesion</h1>

            <input className="form-control" placeholder="ingrese su correo" type="email"></input> <br />
            <input type="password" className="form-control" placeholder="ingrese su contrasena" /> <br />


            <Link href="/productos" className="btn btn-info">Iniciar sesion</Link>

          </form>

        </div>

      </main>
    </div>
  );
}
