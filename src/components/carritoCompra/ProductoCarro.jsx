import React, { useContext, useState } from 'react'
import getUsuario from '../../function/getUsuario';

//Material UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//React-router
import { Link, useNavigate } from 'react-router-dom'

//CSS
import './ProductoCarro.css'

//Context
import { CarritoContext } from '../../context/carritoContext'
import { AuthContext } from '../../context/userContext';





function ProductoCarro() {

    const contextCarro = useContext(CarritoContext)
    const auth = useContext(AuthContext)
    const [carrito, setCarrito] = useState([])
    const navigate = useNavigate()

    const carro = async () => {
        const carroUser = await getUsuario()
        setCarrito(carroUser.carrito)
    }
    carro()



    function deleteItem(id) {
        contextCarro.EliminarProducto(id)
    }
    function aumentarProducto({ product }) {
        contextCarro.AñadirProducto(product)
    }

    function disminuirProducto({ product }) {
        if (product.Cantidad > 1) {
            contextCarro.DisminuirCantidad(product)
        } else {
            contextCarro.EliminarProducto(product.id)
        }
        console.log(product)
    }

    function checkout() {
        if (auth.user) {
            navigate('/checkout')
        } else {
            alert("Debes iniciar sesion para hacer un pedido ❗❌")
            navigate('/login')
        }
    }

    return (
        <div >
            <div className='contenedor-carrito'>
                <h1 style={{ color: '#295ba7' }}>Carrito de Compra</h1>
                <Grid container spacing={3} sx={{ marginTop: '5rem' }}>
                    <Grid item xs={12} sm={8} md={9} container spacing={2} >
                        {carrito.map(product => (
                            <Grid item xs={6} sm={6} md={4} lg={2.4} key={product.id}  >
                                <Card sx={{ maxWidth: '300px', mt: "5px", ml: 'auto', mr: 'auto', }}>
                                    <CardHeader
                                        action={
                                            <Typography variant="body2" color="red" fontSize="18px" fontFamily='Righteous'>
                                                {product.Precio}$
                                            </Typography>
                                        }
                                        title={product.Nombre}
                                        titleTypographyProps={{ style: { fontSize: '15px', fontFamily: 'Righteous' } }}
                                        subheader={product.Categoria}
                                        subheaderTypographyProps={{ style: { fontFamily: 'Righteous', fontSize: '14px' } }}

                                    />
                                    <Link to={`/producto/${product.id}`} className='enlacesProducto'>
                                        <img src={product.Img} className="card-img-top " alt={product.Nombre} />
                                    </Link>
                                    <CardContent>
                                        <Typography variant="h4" color="black" fontSize="14px" fontFamily='Righteous'>
                                            {product.Subtitulo}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: 'space-between' }}>
                                        <Button onClick={() => deleteItem(product.id)} sx={{ fontFamily: 'Righteous', fontSize: '13px' }} variant="outlined" ><DeleteIcon />Delete</Button>
                                        <div className='sumarRestar'>
                                            <div><button onClick={() => disminuirProducto({ product })}><ArrowBackIosNewIcon /></button></div>
                                            <div><input type="text" className='inputCantidad' value={product.Cantidad} disabled /></div>
                                            <div><button onClick={() => aumentarProducto({ product })}><ArrowForwardIosIcon /></button></div>
                                        </div>


                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography fontSize="20px" fontFamily='Righteous' >
                            Total Productos: <Typography variant='p' color='blue'> {contextCarro.CantidadItem()}</Typography>
                        </Typography>
                        <Typography fontSize="20px" fontFamily='Righteous'>
                            Precio Total: <Typography variant='p' color='red'>${contextCarro.PrecioTotal()} </Typography>
                        </Typography>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={checkout} sx={{ fontFamily: 'Righteous' }}>
                            Realizar Compra
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </div>

    )
}

export default ProductoCarro