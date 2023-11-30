import React, { useContext  } from 'react'

//Material UI
import { AddShoppingCart } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom'

//Context
import { CarritoContext } from '../../context/carritoContext';
import { AuthContext } from '../../context/userContext';






function CardNovedades({ productoNovedades }) {

  const contextCarro = useContext(CarritoContext)
  const auth=useContext(AuthContext)
  const navigate=useNavigate()

   

  function handleClick({ product }) {
    if (auth.user){
      contextCarro.AñadirProducto(product)
    }else{
      navigate('/login')
      alert("Debes iniciar sesion para añadir productos al carro ❗😅")
    }
    

  }


  return (
    <div >
      
      <Grid container spacing={2} >
        {productoNovedades.map(product => (
          <Grid item xs={6} sm={6} md={4} lg={2.4} key={product.id}  >

            <Card sx={{ maxWidth: '300px', mt: "5px", ml: 'auto', mr: 'auto' }} >
              <CardHeader
                action={
                  <Typography variant="body2" color="red" fontSize="18px" fontFamily='Righteous'>
                    {product.Precio}$
                  </Typography>
                }
                title={product.Nombre}
                titleTypographyProps={{ style: { fontSize: '16px' ,fontFamily:'Righteous'} }}
                subheader={product.Tipo}
                subheaderTypographyProps={{style:{fontFamily:'Righteous'}}}

              />
              <Link to={`/producto/${product.id}`} className='enlacesProducto'>
                <img src={product.Img} className="card-img-top " alt={product.Nombre} />
              </Link>
              <CardContent sx={{padding:'6px'}}>
                <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', fontSize: '14px', color: 'black', width: '100%', fontWeight: '500' }}>
                  {product.Subtitulo}
                </Link>
              </CardContent >
              <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="outlined" sx={{ width: '50%' ,fontFamily:'Righteous',fontSize:'13px'}} onClick={() => handleClick({ product })} ><AddShoppingCart sx={{ fontSize:'18px' }}/>Añadir</Button>
                <Button variant="outlined" sx={{ width: '50%',fontSize:'14px' }}>
                  <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none' ,fontSize:'13px',display:'flex',alignItems:'center'}}><VisibilityIcon sx={{ paddingRight: '2px',fontSize:'18px'  }} />Ver</Link>
                </Button>
              </CardActions> 
            </Card>


          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CardNovedades