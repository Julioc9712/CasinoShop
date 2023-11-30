import React, { useState } from 'react';
import {Link} from 'react-router-dom'


import './BarraNav.css'

function BarraNav() {
    const [barraLateral, setBarraLateral] = useState(false)

    return (

        <>
            <nav class="navbar navbar-light bg-light">
                <div class="buttomBarra">
                    <button onClick={e => { setBarraLateral(!barraLateral) }}><i class="bi bi-list"></i></button>
                </div>
                <div className='EnlaceTienda'>
                    <Link to="/"><i class="bi bi-shop-window"></i> Tienda</Link>
                </div>
            </nav>

            <div className={barraLateral ? "barra-lateral" : "barra-lateral-visible"}>
                <div className='contenedor-li'>
                    <ul className=" flex-column">

                        <details>
                            <summary>Productos</summary>
                            <div>
                                <li className="nav-item"><Link to="">electrodomesticos</Link></li>
                                <li className="nav-item"><Link to="">Motos</Link></li>
                                <li className="nav-item"> <Link to="">Celulares</Link></li>

                            </div>
                        </details>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Usuarios</Link>
                        </li>

                    </ul>
                </div>

            </div >
        </>





    )
}

export default BarraNav