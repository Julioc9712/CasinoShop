import React, { useState,useContext } from 'react'
import { AuthContext } from '../../context/userContext';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function NavLateral() {
  const auth = useContext(AuthContext)
  const [mostrar, setMostrar] = useState(false)
 

  function handleSubmitAbrir() {
    setMostrar(true)
  }
  function handleSubmitCerrar() {
  setMostrar(false)

   

  }
  function cerraSesion() {
    auth.logout()
    
  }
  return (
    <>
      <button className='abrirMenu' id='abrir' onClick={handleSubmitAbrir} ><i className="bi bi-list"></i></button>
      <div className={mostrar ? 'navLateralVisible' : 'navLateral'}>
        <button className='cerrar-menu' id='abrir' onClick={handleSubmitCerrar}><i className="bi bi-x-lg"></i></button>
        {auth.user ?
          <div className='logoRegistro'>
            <Link to="/"><img src="/images/logoBarraLateral.png" alt="" /></Link>
            <span className='enlacesRegistro'><Link to="/perfil" ><Button variant="contained" sx={{ fontSize: '11px' }}>{auth.user.email}</Button></Link><a href='/' variant="contained"  onClick={cerraSesion} ><Button variant="contained" sx={{ fontSize: '11px' }}>Cerrar sesion</Button></a></span>
          </div> :
          <div className='logoRegistro'>
            <Link to="/"><img src="/images/logoBarraLateral.png" alt="" /></Link>
            <span className='enlacesRegistro'><Link to="/login" ><Button variant="contained" sx={{fontSize:'12px'}}>Iniciar Sesion</Button></Link>
            <Link to="/signup"><Button variant="contained" sx={{fontSize:'12px'}}>Registrar Usuario</Button></Link></span>
          </div>}
        <hr />
        <div className='navTienda'>
          <ul>
            <li className='navItem'><i className="bi bi-house-down"></i><Link to="/">Pagina de Inicio</Link></li>
            <details>
              <summary className='navItem'><span ><i className="bi bi-list-task"></i></span>Productos</summary>
              <div>
                <li className='navItem'><i className="bi bi-caret-right"></i><Link to="/electrodomestico">Electrodomesticos</Link></li>
                <li className='navItem'><i className="bi bi-caret-right"></i><Link to="/motos">Motos-Accesorios</Link></li>
                <li className='navItem'><i className="bi bi-caret-right"></i><Link to="/celulares">Celulares-Accesorios</Link></li>

              </div>
            </details>
            {auth.user ? <li className='navItem'><i className="bi bi-person-fill-check"></i><Link to="/perfil">Mi Perfil</Link></li>: <li className='navItem'><i className="bi bi-person-fill-check"></i><Link to="/login" onClick={() => alert("Inicia sesion para acceder a tu perfil😁")}>Mi Perfil</Link></li>}
            <li className='navItem'><i className="bi bi-cart-plus"></i><Link to="/carrito">Carrito de Compra</Link></li>
            <li className='navItem'><i className="bi bi-envelope-at-fill"></i><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

      </div>
    </>

  )
}

export default NavLateral