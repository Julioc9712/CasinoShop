import  React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import CardCelulares from './CardCelulares';
import getProductos from '../../function/getProductos';
import Skeletonview from '../Skeleton/skeleton';
import Typography from '@mui/material/Typography';


export default function Celulares() {
  
  const [productoCelulares, setProductoCelulares] = useState(null)
  

  useEffect(() => {
    async function getProducto(){
      const products= await  getProductos()
      const filtrado= products.filter(item => item.Categoria === "Celulares")
      setProductoCelulares(filtrado)
    }
    getProducto()
  }, [])
  

  return (
    <div  className='contenedor-ProductMotos'>
      <Typography variant='h3' color='#295ba7' sx={{ textAlign: 'center', fontSize: 25, mb: '5rem',fontFamily:'Righteous' }}>
        Producto Celulares-Accesorios
      </Typography>
      {productoCelulares? <CardCelulares productoCelulares={productoCelulares}/> : <Skeletonview/>}
    </div>
  )

}