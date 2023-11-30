import React from 'react'
import './Categoria.css'
import {Link} from 'react-router-dom'
import { Typography } from '@mui/material'


function Categoria() {
    return (
        <>
            <div className='contenedor-categoria'>
            <Typography variant='h4' color='#295ba7' sx={{ textAlign: 'center', marginBottom: 10, marginTop: 10,fontFamily:'Righteous',fontSize:'25px' }}>
        Descubre nuestras Categorias
      </Typography>
                <div className='categoria-card'>
                    <div className='categorias'>
                        <Link to="/motos"><img src="/images/motos.png" alt="" /></Link>
                        <Link to="/motos">Motos-Accesorios</Link>
                    </div>
                    <div className='categorias'>
                        <Link to="/celulares"><img src="/images/celular.jpg" alt="" /></Link>
                        <Link to="/celulares">Celulares</Link>
                    </div>
                    <div className='categorias'>
                    <Link to="/electrodomestico"><img src="/images/electrdomestico.jpg" alt="" /></Link>
                    <Link to="/electrodomestico">Electrodomésticos</Link>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default Categoria