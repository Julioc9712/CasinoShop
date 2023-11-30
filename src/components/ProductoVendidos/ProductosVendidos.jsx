import * as React from 'react';
import { useState, useEffect } from 'react';
import CardProductosVendidos from './CardProductosVendidos';
import getProductos from '../../function/getProductos';
import Skeletonview from '../Skeleton/skeleton';
import Typography from '@mui/material/Typography';



export default function ProductosVendidos() {
  
  const [productoMasVendidos, setProductoMasVendidos] = useState(null)
  
  function escogerObjetosAleatorios(lista, cantidad) {
    let elementosAlAzar = [];
    while (elementosAlAzar.length < cantidad) {
      let indiceAleatorio = Math.floor(Math.random() * lista.length);
      if (!elementosAlAzar.includes(lista[indiceAleatorio])) {
        elementosAlAzar.push(lista[indiceAleatorio]);
      }
    }
    return elementosAlAzar;
  }
  useEffect(() => {
    async function getProducto(){
      const products= await  getProductos()
      const ventas=escogerObjetosAleatorios(products,5)
      setProductoMasVendidos(ventas)
    }
    getProducto()
  }, [])
  

  return(
    <div>
      <Typography variant='h4' color='#295ba7' sx={{fontSize:'25px' , textAlign: 'center', marginBottom: 5, marginTop: 10 ,fontFamily:'Righteous'}}>
        Productos Mas Vendidos
      </Typography>
      {productoMasVendidos? <CardProductosVendidos productoMasVendidos={productoMasVendidos} /> : <Skeletonview/>}
    </div>
  
  )
}