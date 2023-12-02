import React from 'react'
import './PaginaError.css'
import { Link } from 'react-router-dom'

function PaginaError() {
  return (
    <section className="page_404">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
                <img src="/images/dribbble_1.gif" alt="" />

              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Producto no encontrado
                </h3>

                <p>Este producto no se encuentra disponible!</p>

                <Link to="/" className="link_404">Ir al Inicio</Link>
              </div>
            
       
    </section>
  )
}

export default PaginaError