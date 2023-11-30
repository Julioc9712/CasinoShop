import  React,{ useState, useEffect }  from 'react';
import Loading from '../Loading/Loading';
import CardNovedades from './CardNovedades';
import getProductos from '../../function/getProductos';
import Typography from '@mui/material/Typography';

import Skeletonview from '../Skeleton/skeleton';


export default function Novedades() {
  
  const [productoNovedades, setProductoNovedades] = useState(null)
  

  useEffect(() => {
    async function getProducto(){
      const products= await  getProductos()
      const novedades=products.slice(-5)
      setProductoNovedades(novedades)
    }
    getProducto()
  }, [])
  

  return(
    <div>
      <Typography variant='h4' color='#295ba7' sx={{ fontSize:'25px' ,textAlign: 'center', marginBottom: 5, marginTop: 10,fontFamily:'Righteous' }}>
        Novedades
      </Typography>
      {productoNovedades? <CardNovedades productoNovedades={productoNovedades} /> : <Skeletonview/>}
    </div>
  
  )
}