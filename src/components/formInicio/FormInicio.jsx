import React,{  useState }  from 'react';

//Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

//react-router-dom
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

//Firebase-Config
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';








const defaultTheme = createTheme();

export default function SignIn() {
  
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errorLogin,setErrorLogin]=useState(false)
    

    const navigate=useNavigate()

    const login = async (email, password) => {
        
      try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          alert('Has iniciado sesion con exito. Disfruta..😁');
          navigate('/')      
        } catch (error) {
          setErrorLogin(true)
          
        }
      }

      function loginUser(e){
        e.preventDefault()
        login(email,password)
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
            padding: 8,
            backgroundColor: '#eceff1',
            marginTop: 25,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor:'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color='#295ba7'>
            Inicio Sesion
          </Typography>
          <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1, }}>
            <TextField
              sx={{ backgroundColor: 'white', }}
              margin="normal"
              required
              fullWidth
              onChange={e => {setEmail(e.target.value)}}
              id="email"
              label="Direccion Correo"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              sx={{ backgroundColor: 'white', }}
              margin="normal"
              required
              fullWidth
              onChange={e => {setPassword(e.target.value)}}
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errorLogin ?  <Alert severity="error">Su contraseña o correo no son los correctos!!</Alert>
             : " "}
            <Button
              onSubmit={loginUser} 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia Sesion
            </Button>
            <Grid container>
              
              <Grid item>
                <Link to="/signup" variant="body2" style={{textDecoration:'none'}}>
                  "No tienes una cuenta? Registrate"
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}