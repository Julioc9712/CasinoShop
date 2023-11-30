import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';





const steps = ['Datos de compra', 'Detalles del pago'];



export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => { setActiveStep(activeStep + 1) }
  const handleBack = () => { setActiveStep(activeStep - 1) }

  const [infoPedido, setInfoPedido] = useState([])


 
  function pedidoUserInfo(data) {
    setInfoPedido(data)
  }

  

  const Form = () => activeStep === 0 ? <AddressForm handleNext={handleNext} pedidoUserInfo={pedidoUserInfo} />
    : <PaymentForm handleBack={handleBack} infoPedido={infoPedido}/>

  return (
    <>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: '10rem' }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" color='#282b73'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
        </Paper>

      </Container>
    </>
  )
}