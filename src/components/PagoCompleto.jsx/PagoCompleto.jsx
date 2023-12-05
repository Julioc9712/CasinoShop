import React from 'react'
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function PagoCompleto() {
  return (
    <div style={{minHeight: "38vh"}}>
        <div style={{ marginTop: '15rem', display: 'flex', justifyContent: 'center' }}>
      <Paper style={{ width: '80%', padding: '20px' }}>
        <Typography variant="h5" gutterBottom marginBottom='1rem'>
          Gracias por tu compra 😁❤
        </Typography>
        <Typography variant="subtitle1">
          ¡Felicidades por completar tu compra en CasinoShop! Esperamos que disfrutes de tu nuevo producto y que te sea de gran utilidad. Agradecemos tu preferencia y esperamos verte de nuevo pronto en nuestra tienda en línea. ¡Gracias por confiar en nosotros!
        </Typography>
        <Typography style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px',marginTop:'5px',flexWrap:'wrap' }}>
          
          El envio llegara lo antes posible siempre desde 24 horas a 10 dias
          <img src="/images/envio.jpg" style={{ width: '80px' }} />
        </Typography >
        <Button component={Link} to="/" variant='contained' sx={{ marginTop: '1rem' }}>Ir al Inicio</Button>

      </Paper>


    </div>
    </div>
    
  )
}

export default PagoCompleto