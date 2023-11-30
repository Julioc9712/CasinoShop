import  React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import CardMotos from './cardMotos';
import getProductos from '../../function/getProductos';
import './Motos.css'
import Skeletonview from '../Skeleton/skeleton';
import Typography from '@mui/material/Typography';




export default function Motos() {
  
  const [productoMoto, setProductoMoto] = useState(null)
  

  useEffect(() => {
    async function getProducto(){
      const products= await getProductos()
      const filtrado= products.filter(item => item.Categoria === "Moto Electrica")
      setProductoMoto(filtrado)
      
    }
    getProducto()
  }, [])
  

  return(
    <div className='contenedor-ProductMotos'>
       <Typography variant='h3' color='#295ba7' sx={{ textAlign: 'center', marginBottom: 5 ,fontSize: 25,fontFamily:'Righteous'}}>
        Productos Motos-Accesorios
      </Typography>
      {productoMoto? <CardMotos productoMoto={productoMoto}/> : <Skeletonview/>}
    </div>
  
  )
}