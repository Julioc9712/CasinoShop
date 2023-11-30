import React from 'react'
import './Servicio.css'
import { Link } from 'react-router-dom'

function ClienteServicios() {
    return (
        <div className='clienteServicios'>
            <h2 style={{color:'#295ba7'}}>Compromisos con el cliente</h2>
            <div className='imgServicios'>
                <Link to='/contacto'><img src="/images/opina.webp" alt="" />Opina sobre nosotros</Link>
                <Link to='/tiendaInfo'><img src="/images/quienes somos.webp" alt="" />Quienes somos</Link>
            </div>
        </div>
    )
}

export default ClienteServicios