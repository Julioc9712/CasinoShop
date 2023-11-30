import React from 'react'
import './Servicio.css'
import ClienteServicios from './ClienteServicios'

function Servicio() {
    return (
        <>  <div className='contenedorServicio'>
            <div className="contenedor-servicio">
                <img src="/images/servicio.jpg" alt="" />
                
                <div>
                    <h5>Nuestros compromisos se centran en ser expertos en lo que vendemos y garantizar al cliente todo lo que necesita:</h5>
                    <ul>
                        <li>Envíos gratuitos a partir de 50$ siempre en 24 horas* (si excepcionalmente incumplimos la fecha de entrega, te devolvemos los gastos de envío).</li>
                        <li>Garantía con la mejor solución para ti en 24h.</li>
                        <li>Atención al cliente local y sin esperas.</li>
                        <li>Nos tomamos muy en serio las opiniones de nuestros clientes, y puedes verlas siempre en nuestros artículos</li>
                    </ul>
                    
                </div>

            </div>
        </div>
        <ClienteServicios/>
        
            
            
        </>
    )
}

export default Servicio