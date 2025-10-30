import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda de productos</a>
                   
                        <div className="navbar-nav">
                            <Link href='/productos' className="nav-link active" aria-current="page">Home</Link>
                            <Link className="nav-link" href="/productos">Productos</Link>
                            <Link className="nav-link" href="/carrito">Carrito</Link>
                            <Link className="nav-link" href='./'>Cerrar Sesion</Link>
                        </div>
                </div>
            </nav>
        </>
    )
}
