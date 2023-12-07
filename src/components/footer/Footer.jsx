import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer>
            <div className='logo-whatapp'><Link to="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20de%20la%20pagina%20solicitando%20sus%20servicios%20o%20productos" target='__blanck'><img src='/images/whatapp.png' alt="" /></Link>
            </div>
            <div className='container-footer'>
                <div className='footer-menu'>

                    <ul>
                        <h5>Menu</h5>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/motos">Motos-Accesorios</Link></li>
                        <li><Link to="/celulares">Celulares</Link></li>
                        <li><Link to="/electrodomestico">Electrodomesticos</Link></li>

                    </ul>
                </div>
                <div className='footer-Contactanos'>

                    <ul>
                        <h5>Contactanos</h5>
                        <li><Link to=""><i className="bi bi-whatsapp"></i> +5352990719</Link></li>
                        <li><Link to="/contacto">juliocmr97@gmail.com</Link></li>

                    </ul>
                </div>
                <div className='footer-redes'>
                    <h5>Redes</h5>
                    <div className='redes'>
                                 <li><Link to='https://www.facebook.com/julioc.mesaruiz' target='_blank'><i className="bi bi-facebook"></i></Link></li>
                        <li><Link to='https://github.com/Julioc9712' target='_blank'><i className="bi bi-github"></i></Link></li>
                        <li><Link to='https://www.linkedin.com/in/julio-cesar-mesa-ru%C3%ADz-490438282/' target='_blank'><i className="bi bi-linkedin"></i></Link></li>
                    </div>

                </div>


            </div>
        </footer>


    )
}

export default Footer
