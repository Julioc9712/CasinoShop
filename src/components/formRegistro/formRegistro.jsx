import  React,{ useState, useContext }  from 'react';

//Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";


const defaultTheme = createTheme();

export default function SignUp() {

    const auth = useContext(AuthContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")
    const [date,setDate]=useState("")
    const navigate = useNavigate()





    const registerUser = async (e) => {
        e.preventDefault();
        auth.register(email, password,firstName,lastName,telefono,date);
        navigate('/');
       
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    value={firstName}
                                    onChange={e => { setFirstName(e.target.value) }}
                                    id="firstName"
                                    label="First Name"
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
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    required
                                    fullWidth
                                    value={email}
                                    onChange={e => { setEmail(e.target.value) }}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    required
                                    fullWidth
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    autoComplete="given-name"
                                    name="telefono"
                                    required
                                    fullWidth
                                    value={telefono}
                                    onChange={e => { setTelefono(e.target.value) }}
                                    id="telefono"
                                    label="Telefono"
                                    type='tel'
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    sx={{ backgroundColor: 'white', }}
                                    autoComplete="given-name"
                                    name="date"
                                    required
                                    fullWidth
                                    value={date}
                                    onChange={e => { setDate(e.target.value) }}
                                    id="date"
                                    type='date'
                                    
                                />
                            </Grid>
                            
                        </Grid>
                        <Button
                            onSubmit={registerUser}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2" style={{textDecoration:'none'}}>
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