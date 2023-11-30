import React, { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { Input, ListItem } from '@mui/material'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


function Review() {

  const contextCarro = useContext(CarritoContext)
  const carroUser = contextCarro.carrito

  return (
    <div>
      {carroUser.map(product => (
        <ListItem key={product.id}>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="p">
                  {product.Nombre}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {product.Precio}$
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Cantidad:{product.Cantidad}
                </Typography>

              </CardContent>

            </Box>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={product.Img}
              alt="Live from space album cover"
            />
          </Card>


        </ListItem>

      ))}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>      
        <Typography variant='h5' sx={{fontWeight:'600',marginTop:'20px'}}>Total:</Typography>
        <Typography variant='p' color='red'>${contextCarro.PrecioTotal()}</Typography>
      </div>
    </div>
  )
}

export default Review