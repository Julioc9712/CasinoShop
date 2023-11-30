import React, { useState,useContext } from 'react'

//Materia UI
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Context
import { AuthContext } from '../../context/userContext';
import { CarritoContext } from '../../context/carritoContext';

import {Link} from 'react-router-dom'

//CSS
import './Nav.css'
import './NavLateral.css'
import getUsuario from '../../function/getUsuario';

function Nav() {

  const auth = useContext(AuthContext)
  const contexCarrito=useContext(CarritoContext)
  const [userRef, setUserRef] = useState([])


  const userInfo= async ()=>{
    const getUsuarioById= await getUsuario()
    setUserRef(getUsuarioById)
  }
  userInfo()


  function cerraSesion() {auth.logout()}

  return (
    <header>

      <div >
        <Link to="/" className='logo-button'><img className='logo' src="/images/logoBarraLateral.png" alt="" />
          <h5 className='TiendaNombre'>CasinoShop</h5>
        </Link>
        
        </div>
      <nav className="nav" id='nav'>
        <ul className='nav-list'>
          <li><i className="bi bi-house-door"></i><Link to="/" > Inicio</Link></li>
          <li className="nav-item dropdown"><Link className="nav-link dropdown" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i className="bi bi-bag-dash"></i>Productos</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/electrodomestico">Electrodomesticos</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/motos">Motos-Accesorios</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/celulares">Celulares-Accesorios</Link></li>
            </ul>
          </li>
          <li><i className="bi bi-person-lines-fill"></i><Link to="/contacto" > Contacto</Link></li>
        </ul>
      </nav>
      <div className='login-car'>

        {auth.user ?
          <div className="btn-group">
            <button className="btn "style={{borderRadius: "50%",width: "40px",height: "40px",display: "flex",justifyContent: "center",alignItems: "center",border:'transparent'}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={userRef.img} alt="" className='imgNav' />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to='/perfil' >{auth.user.email}</Link></li>
              <li><a  href='/' className="dropdown-item" onClick={cerraSesion}>Cerrar sesion</a></li>
            </ul>
          </div>
          :
          <div className="btn-group">
            <button className="btn " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-fill-x"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/login">Iniciar sesion</Link></li>
              <li><Link className="dropdown-item" to="/signup">Crear una cuenta</Link></li>
            </ul>
          </div>
        }
        <Badge badgeContent={contexCarrito.CantidadItem()} color="primary">
          <Link to="/carrito" ><ShoppingCartIcon /></Link>
        </Badge>

      </div>
    </header>
  )
}

export default Nav