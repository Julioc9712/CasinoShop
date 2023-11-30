import  React from 'react';

//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

//React-hook-form
import { FormProvider, useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import AdressInput from './AdressInput';


export default function AddressForm({pedidoUserInfo,handleNext}) {

  const pedidoUser = useForm()
  
  return (
    <>
      <Typography variant="h6" gutterBottom marginBottom='2rem'>
        Datos personales del Pedido
      </Typography>
      <FormProvider {...pedidoUser}>
        <form onSubmit={pedidoUser.handleSubmit(data=>{
          pedidoUserInfo(data)
          handleNext()
        })}>
          <Grid container spacing={4}>
            <AdressInput required name="firstName" label="First name"/>
            <AdressInput required name="lastName" label="Last name"/>
            <AdressInput required name="address" label="Address line"/>
            <AdressInput required name="city" label="City"/>
            <AdressInput required name="state" label="State/Province/Region"/>
            <AdressInput required name="zip" label="Postal code"/>
            

          </Grid>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'1rem'}}>
          <Button component={Link} to='/carrito' variant='contained'>Regresar</Button>
          <Button type='submit' variant='contained'>Siguiente</Button>
          </div>
          
        </form>
      </FormProvider>


    </>
  );
}