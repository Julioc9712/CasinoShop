import  React,{ useState, useEffect }  from 'react';
import './Electrodomesticos.css'
import CardElectrodomestico from './cardElectrodomestico';
import Loading from '../Loading/Loading';
import getProductos from '../../function/getProductos';
import Skeletonview from '../Skeleton/skeleton';
import Typography from '@mui/material/Typography';


export default function Electrodomestico() {
  
  const [productoElectrodomestico, setProductoElectrodomestico] = useState(null)
 

  useEffect(() => {
    async function getProducto(){
      const products= await  getProductos()
      const filtrado= products.filter(item => item.Categoria === "Electrodomestico")
      setProductoElectrodomestico(filtrado)
    }
    getProducto()
  }, [])
  

  return(
    <div className='contenedor-ProductMotos'>
      <Typography variant='h3' color='#295ba7' sx={{ textAlign: 'center', marginBottom: 5, fontSize: 25,fontFamily:'Righteous' }} >
        Producto Electrodomesticos
      </Typography>
      {productoElectrodomestico? <CardElectrodomestico productoElectrodomestico={productoElectrodomestico}/> : <Skeletonview/>}
    </div>
  
  )
}