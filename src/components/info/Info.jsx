import React, { useEffect, useRef } from 'react'
import './Info.css'
import Typed from 'typed.js';

function Info() {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Descubre la tienda online CasinoShop, donde encontrarás una gran variedad de electrodomésticos, motos y celulares.", "Disfruta de la comodidad de comprar desde casa y aprovecha nuestras increíbles promociones"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay:4000,
      loop: true,
      showCursor: false
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <>
      <div className='contenedor-info'>
        <h1 style={{ color: '#295ba7' }}>Bienvenido a nuestra Tienda Online</h1>
        <div className='Info'>
          <img src="/images/infoTienda.png" alt="" />
          <div className='textoInfo'>
          <p ref={typedRef} ></p>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Info