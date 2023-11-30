import React, { useEffect, useState , useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getProductById from '../../function/getProductById'
import './ProductoById.css'

//Context
import { CarritoContext } from '../../context/carritoContext';
import { AuthContext } from '../../context/userContext';

//Material UI
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function ProductoById() {
  const { id } = useParams()
  const [productoInfo, setProductoInfo] = useState(null)
  const contextCarro = useContext(CarritoContext)
  const [cantidad, setCantidad] = useState(1)
  const auth=useContext(AuthContext)
  const navigate=useNavigate()


  useEffect(() => {
    async function getProductoInfo() {
      const product = await getProductById(id)
      setProductoInfo(product)
    }
    getProductoInfo()

  }, [id])


 
  function handleClick(product,cantidad) {
    if (auth.user){
      contextCarro.AñadirProducto(product,cantidad)
    }else{
      navigate('/login')
      alert("Debes iniciar sesion para añadir productos al carro ❗😅")
    }

  }

  function disminuir() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }

  }
  function aumentar() {
    setCantidad(cantidad + 1)
  }
  return (
    <section >
      <div className='productoId'>
        <div className='productoImg'><img src={productoInfo?.Img} style={{height:'500px'}}/></div>
        <div className='productoInfo'>
          <h3>{productoInfo?.Subtitulo}</h3>
          <h4>Tipo: {productoInfo?.Tipo}</h4>
          <h4>Precio:{productoInfo?.Precio}$</h4>
          <label htmlFor=""><strong>Descripcion:</strong></label>
          <p>{productoInfo?.Descripcion}</p>
          <p><strong>Disponibilidad:</strong> {productoInfo?.Disponibilidad}</p>
          <div className='añadirCantidad'>
            <button className='btn btn-primary' onClick={() => handleClick({ ...productoInfo, id: id,Cantidad: cantidad},cantidad)}>Añadir al Carrito</button>
            <div className='sumarRestar'>
              <div onClick={disminuir}><button><ArrowBackIosNewIcon /></button></div>
              <div><input type="text" className='inputCantidad' value={cantidad} disabled onChange={e => setCantidad(e.target.value)} /></div>
              <div onClick={aumentar}><button ><ArrowForwardIosIcon /></button></div>
            </div>
          </div>

          <hr />
          <div className='productCategoria'>
          <p>Producto:{productoInfo?.Nombre}</p><br /><p>Categoria: <a href={`/${productoInfo?.Categoria}`}>{productoInfo?.Categoria}</a></p></div>
          <p style={{display:'flex',justifyContent:'left',alignItems:'center',gap:'10px'}}>
            <img src="/images/envio.jpg"  style={{width:'80px'}}/>
            Envíos gratuitos a partir de 50$ siempre en 24 horas*
          </p>
        </div>
        
      </div>

    </section>
  )
}

export default ProductoById