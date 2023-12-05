import React, { useState, useContext, useEffect } from 'react';

//Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import getUsuarios from '../../function/getUsuarios';
import { validarNombreInput, validarEmailInput, validarInputNumerico } from '../../function/validacionInput';

const defaultTheme = createTheme();

export default function SignUp() {

    const authUser = useContext(AuthContext)

    //Estados
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")
    const [date, setDate] = useState(" ")
    const navigate = useNavigate()

    //Validaciones
    const [verificacionEmail, setVerificacionEmail] = useState("")
    const [creandoUser, setCreandoUser] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [emailExiste, setEmailExiste] = useState(false)
    const [nombreValido, setNombreValido] = useState(true);
    const [apellidoValido, setApellidoValido] = useState(true);
    const [minLengthNombre, setMinLengthNombre] = useState(true)
    const [minLengthApellido, setMinLengthApellido] = useState(true)
    const [numericoValido, setNumericoValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [dateValido, setDateValido] = useState(true);
    const [passwordValido, setPasswordValido] = useState(true)

    useEffect(() => {
        async function getUsuariosEmail() {
            const usuarioEmail = await getUsuarios()
            setVerificacionEmail(usuarioEmail)
        }
        getUsuariosEmail()
    }, [])


    const registerUser = async (e) => {
        e.preventDefault()
        if (verificacionEmail.find(item => item.email === email)) {
            setEmailExiste(true);
        } else {
            { validarNombreInput(firstName) ? setNombreValido(true) : setNombreValido(false) }
            { (firstName.length >= 2) ? setMinLengthNombre(true) : setMinLengthNombre(false) }
            { validarNombreInput(lastName) ? setApellidoValido(true) : setApellidoValido(false) }
            { (lastName.length >= 2) ? setMinLengthApellido(true) : setMinLengthApellido(false) }
            { validarEmailInput(email) ? setEmailValido(true) : setEmailValido(false) }
            { validarInputNumerico(telefono) ? setNumericoValido(true) : setNumericoValido(false) }
            { (new Date(date) < new Date()) ? setDateValido(true) : setDateValido(false) }
            { (password.length >= 8) ? setPasswordValido(true) : setPasswordValido(false) }
            if (validarNombreInput(firstName) &
                (firstName.length >= 2) &
                validarNombreInput(lastName) &
                (lastName.length >= 2) &
                validarEmailInput(email) &
                validarInputNumerico(telefono) &
                (new Date(date) < new Date()) &
                (password.length >= 8)) {
                setErrorRegister(false)
                setEmailExiste(false)
                setCreandoUser(true)
                await authUser.register(email, password, firstName, lastName, telefono, date);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                setErrorRegister(true);
            }
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 5,
                        borderColor: '#2196f3',
                        padding: 5,
                        backgroundColor: '#eceff1',
                        marginTop: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color='#295ba7'>
                        Registrar Usuario
                    </Typography>
                    <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
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
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    required
                                    autoComplete='off'
                                    fullWidth
                                    value={email}
                                    onChange={e => { setEmail(e.target.value) }}
                                    type='email'
                                    id="email"
                                    label="Direccion de Correo"
                                    name="email"
                                />
                            </Grid>
                            {emailExiste ? <Grid item xs={12}> <Alert severity="error">Este correo ya esta en uso</Alert>
                            </Grid> : " "}
                            {emailValido ? " " : <Grid item xs={12}> <Alert severity="error">Este correo no es valido</Alert>
                            </Grid>}

                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    required
                                    autoComplete='off'
                                    fullWidth
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            {passwordValido ? "" : <Grid item xs={12}> <Alert severity="error">Su contraseña debe tener al menos 8 caracteres</Alert>
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
                            {numericoValido ? " " : <Grid item xs={12}> <Alert severity="error">El numero  no puede tener letras o caracteres</Alert>
                            </Grid>}
                            <Grid item xs={12} >
                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    name="date"
                                    label="Fecha de nacimiento"
                                    required
                                    fullWidth
                                    value={date}
                                    onChange={e => { setDate(e.target.value) }}
                                    id="date"
                                    type='date'
                                />
                            </Grid>
                            {dateValido ? " " : <Grid item xs={12}> <Alert severity="error">La fecha de nacimiento no puede ser una fecha futura</Alert>
                            </Grid>}
                        </Grid>
                        {creandoUser ? <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled
                        >
                            Registrando...
                        </Button>
                            :
                            <Button
                                onSubmit={registerUser}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Registrar
                            </Button>}
                        {errorRegister ? <Grid item xs={12}> <Alert severity="error">Revise los campos de registro </Alert>
                        </Grid> : " "}
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2" style={{ textDecoration: 'none' }}>
                                    Ya tiene una cuenta? Inicia Sesion
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}