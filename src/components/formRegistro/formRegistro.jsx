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
import { EmailAuthProvider, fetchSignInMethodsForEmail, SignInMethod } from "firebase/auth";
import { AuthContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig"
import { Alert } from '@mui/material';
import getUsuarios from '../../function/getUsuarios';




const defaultTheme = createTheme();

export default function SignUp() {

    const authUser = useContext(AuthContext)

    const [creandoUser, setCreandoUser] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [emailExiste, setEmailExiste] = useState(false)
    const [verificacionEmail, setVerificacionEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate()


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
            setEmailExiste(false)
            if (password.length >= 8) {
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}

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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    required
                                    fullWidth
                                    value={lastName}
                                    onChange={e => { setLastName(e.target.value) }}
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastName"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    required
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

                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    required
                                    fullWidth
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"

                                />
                            </Grid>

                            {errorRegister ? <Grid item xs={12}> <Alert severity="error">Su contraseña debe tener al menos 8 caracteres</Alert>
                            </Grid> : " "}


                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}

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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}

                                    name="date"
                                    label="Cumpleaños"
                                    required
                                    fullWidth
                                    value={date}
                                    onChange={e => { setDate(e.target.value) }}
                                    id="date"
                                    type='date'

                                />
                            </Grid>

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