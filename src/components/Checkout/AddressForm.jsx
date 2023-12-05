import React, { useState } from 'react';

//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Alert, Button, TextField } from '@mui/material';

//React-hook-form
import { Link } from 'react-router-dom';
import { validarInputNumerico, validarNombreInput } from '../../function/validacionInput';



export default function AddressForm({ pedidoUserInfo, handleNext }) {

  //Estados
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [direccion, setDireccion] = useState("")
  const [city, setCity] = useState("")
  const [region, setRegion] = useState("")
  const [codigo, setCodigo] = useState(" ")
  const [telefono, setTelefono] = useState("")


  //Validaciones
  const [errorRegister, setErrorRegister] = useState(false)
  const [nombreValido, setNombreValido] = useState(true);
  const [minLengthNombre, setMinLengthNombre] = useState(true)
  const [apellidoValido, setApellidoValido] = useState(true);
  const [minLengthApellido, setMinLengthApellido] = useState(true)
  const [minLengthDireccion, setMinLengthDireccion] = useState(true)
  const [cityValido, setCityValido] = useState(true);
  const [minLengthCity, setMinLengthCity] = useState(true)
  const [regionValido, setRegionValido] = useState(true);
  const [minLengthRegion, setMinLengthRegion] = useState(true);
  const [numericoValido, setNumericoValido] = useState(true);
  const [numericoValidoCell, setNumericoValidoCell] = useState(true);




  function onSubmit(e) {
    e.preventDefault()

    { validarNombreInput(firstName) ? setNombreValido(true) : setNombreValido(false) }
    { (firstName.length >= 2) ? setMinLengthNombre(true) : setMinLengthNombre(false) }
    { validarNombreInput(lastName) ? setApellidoValido(true) : setApellidoValido(false) }
    { (lastName.length >= 2) ? setMinLengthApellido(true) : setMinLengthApellido(false) }
    { (direccion.length >= 2) ? setMinLengthDireccion(true) : setMinLengthDireccion(false) }
    { validarNombreInput(city) ? setCityValido(true) : setCityValido(false) }
    { (city.length >= 2) ? setMinLengthCity(true) : setMinLengthCity(false) }
    { validarNombreInput(region) ? setRegionValido(true) : setRegionValido(false) }
    { (region.length >= 2) ? setMinLengthRegion(true) : setMinLengthRegion(false) }
    { validarInputNumerico(codigo) ? setNumericoValido(true) : setNumericoValido(false) }
    { validarInputNumerico(telefono) ? setNumericoValidoCell(true) : setNumericoValidoCell(false) }
    if (validarNombreInput(firstName) &
      (firstName.length >= 2) &
      validarNombreInput(lastName) &
      (lastName.length >= 2) &
      (direccion.length >= 2) &
      validarNombreInput(city) &
      (city.length >= 2) &
      validarNombreInput(region) &
      (region.length >= 2) &
      validarInputNumerico(codigo) &
      validarInputNumerico(telefono)
    ) {
      const data = {firstName, lastName, direccion, city, region, codigo,telefono }
      pedidoUserInfo(data)
      handleNext()

    } else {
      setErrorRegister(true);
    }
  }
  return (
    <>
      <Typography variant="h6" gutterBottom marginBottom='2rem'>
        Datos personales del Pedido
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              name="Nombre"
              required
              fullWidth
              value={firstName}
              onChange={e => { setFirstName(e.target.value) }}
              id="firstName"
              label="Nombre"
              autoFocus
            />
          </Grid>
          {nombreValido ? " " : <Grid item xs={12}> <Alert severity="error">El nombre no puede tener numeros o caracteres</Alert>
          </Grid>}
          {minLengthNombre ? " " : <Grid item xs={12}> <Alert severity="error">El nombre debe tener mas de 2 letras </Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              required
              fullWidth
              value={lastName}
              onChange={e => { setLastName(e.target.value) }}
              id="lastName"
              label="Apellidos"
              name="lastName"
            />
          </Grid>
          {apellidoValido ? " " : <Grid item xs={12}> <Alert severity="error">Los apellidos no pueden tener numeros o caracteres</Alert>
          </Grid>}
          {minLengthApellido ? " " : <Grid item xs={12}> <Alert severity="error">Los apellidos debe tener mas de 2 letras </Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              name="address"
              required
              fullWidth
              value={direccion}
              onChange={e => { setDireccion(e.target.value) }}
              id="Address line"
              label="Direccion"
            />
          </Grid>
          {minLengthDireccion ? " " : <Grid item xs={12}> <Alert severity="error">El nombre debe tener mas de 2 letras </Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              name="City"
              required
              fullWidth
              value={city}
              onChange={e => { setCity(e.target.value) }}
              id="city"
              label="City"
            />
          </Grid>
          {cityValido ? " " : <Grid item xs={12}> <Alert severity="error">El nombre no puede tener numeros o caracteres</Alert>
          </Grid>}
          {minLengthCity ? " " : <Grid item xs={12}> <Alert severity="error">El nombre debe tener mas de 2 letras </Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              name="state"
              required
              fullWidth
              value={region}
              onChange={e => { setRegion(e.target.value) }}
              id="state"
              label="State/Province/Region"
            />
          </Grid>
          {regionValido ? " " : <Grid item xs={12}> <Alert severity="error">El nombre no puede tener numeros o caracteres</Alert>
          </Grid>}
          {minLengthRegion ? " " : <Grid item xs={12}> <Alert severity="error">El nombre debe tener mas de 2 letras </Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              type='tel'
              name="telefono"
              required
              fullWidth
              value={telefono}
              onChange={e => { setTelefono(e.target.value) }}
              id="telefono"
              label="Telefono"
            />
          </Grid>
          {numericoValidoCell ? " " : <Grid item xs={12}> <Alert severity="error">El numero  no puede tener letras o caracteres</Alert>
          </Grid>}
          <Grid item xs={12} >
            <TextField
              sx={{ backgroundColor: 'white' }}
              type='number'
              name="codigo"
              required
              fullWidth
              value={codigo}
              onChange={e => { setCodigo(e.target.value) }}
              id="codigo postal"
              label="Codigo Postal"
            />
          </Grid>
          {numericoValido ? " " : <Grid item xs={12}> <Alert severity="error">El numero  no puede tener letras o caracteres</Alert>
          </Grid>}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button component={Link} to='/carrito' variant='contained'>Regresar</Button>
          <Button type='submit' variant='contained' onClick={onSubmit}>Siguiente</Button>
        </div>
        {errorRegister ? <Grid item xs={12}> <Alert severity="error">Revise los campos de registro </Alert>
        </Grid> : " "}
      </form>
    </>
  );
}