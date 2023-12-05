import React, { useState, useContext } from 'react';

//Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingModal from './LoadinModal';
import Grid from '@mui/material/Grid';
import './Perfil.css'

//Firestore-Config
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import { AuthContext } from '../../context/userContext';
import { validarInputNumerico, validarNombreInput } from '../../function/validacionInput';
import { Alert } from '@mui/material';







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  backgroundColor: '#eceff1',
  borderRadius: 5,
  borderColor: '#2196f3',
  border: '2px solid cyan',
  boxShadow: 24,
  p: 5,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    width: '90%',
  },

};

export default function ModalPerfil({ editPerfil, userRef }) {


  const auth = useContext(AuthContext)

  //States
  const [nombreEdit, setNombreEdit] = useState(userRef.nombre)
  const [apellidosEdit, setApellidosEdit] = useState(userRef.apellidos)
  const [telefonoEdit, setTelefonoEdit] = useState(userRef.telefono)
  const [cuidadEdit, setCuidadEdit] = useState(userRef.cuidad)
  const [date, setDate] = useState(userRef.date)
  const [guardarCambios, setGuardarCambios] = useState("Guardar Cambios")
  const [desactivar, setDesactivar] = useState(false)

  //Validaciones
  const [nombreValido, setNombreValido] = useState(true);
  const [apellidoValido, setApellidoValido] = useState(true);
  const [numericoValido, setNumericoValido] = useState(true);
  const [cuidadValido, setCuidadValido] = useState(true);
  const [dateValido, setDateValido] = useState(true);
  const [datosValido, setDatosValido] = useState(false)


  function completarEditPerfil() {

    { validarNombreInput(nombreEdit) ? setNombreValido(true) : setNombreValido(false) }
    { validarNombreInput(apellidosEdit) ? setApellidoValido(true) : setApellidoValido(false) }
    { validarNombreInput(cuidadEdit) ? setCuidadValido(true) : setCuidadValido(false) }
    { validarInputNumerico(telefonoEdit) ? setNumericoValido(true) : setNumericoValido(false) }
    { (new Date(date) < new Date()) ? setDateValido(true) : setDateValido(false) }

    if (validarNombreInput(nombreEdit) & validarNombreInput(apellidosEdit) & validarNombreInput(cuidadEdit) & validarNombreInput(cuidadEdit) & validarInputNumerico(telefonoEdit) & (new Date(date) < new Date())) {
      setDatosValido(false)
      setTimeout(() => {
        editPerfil();
      }, 3000);


      async function perfilUsuarioEdit() {

        const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
        const docRef = await setDoc(usuarioEdit, {
          nombre: nombreEdit,
          apellidos: apellidosEdit,
          email: userRef.email,
          password: userRef.password,
          telefono: telefonoEdit,
          cuidad: cuidadEdit,
          date: date,
          img: userRef.img,
          carrito: userRef.carrito,
        })
      }
      perfilUsuarioEdit()
      setDesactivar(true)
      setGuardarCambios("Guardando cambios!")
    } else {
      setDatosValido(true)
    }

  }




  return (
    <div className='modalEdit'>

      <Modal
        open={true}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ color: '#3561ee' }}>
            Editando Perfil
          </Typography>
          <Grid id="modal-modal-description" sx={{ mt: 2, width: '150%', display: 'flex', justifyContent: 'center' }}>
            <div className='contenedor-datosPerfil'>
              <form className="row  g-2 flex-column">

                <div className="col-12">
                  <label htmlFor="inputName" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="inputNames" placeholder="Nombre" value={nombreEdit} onChange={e => setNombreEdit(e.target.value)} />
                </div>
                {nombreValido ? " " : <Grid item xs={12}> <Alert severity="error">El nombre no puede tener numeros o caracteres</Alert>
                </Grid>}
                <div className="col-12">
                  <label htmlFor="inputlastNames" className="form-label">Apellidos</label>
                  <input type="text" className="form-control" id="inputlastNames" placeholder="lastName" value={apellidosEdit} onChange={e => setApellidosEdit(e.target.value)} />
                </div>
                {apellidoValido ? " " : <Grid item xs={12}> <Alert severity="error">El apellido no puede tener numeros o caracteres</Alert>
                </Grid>}
                <div className="col-12">
                  <label htmlFor="inputTel" className="form-label">Telefono (Opcional)</label>
                  <input type="tel" className="form-control" id="inputTel" placeholder="#Telefono" value={telefonoEdit} onChange={e => setTelefonoEdit(e.target.value)} />
                </div>
                {numericoValido ? " " : <Grid item xs={12}> <Alert severity="error">El numero  no puede tener letras o caracteres</Alert>
                </Grid>}
                <div className="col-md-12">
                  <label htmlFor="inputCity" className="form-label">City (Opcional)</label>
                  <input type="text" className="form-control" id="inputCity" value={cuidadEdit} onChange={e => setCuidadEdit(e.target.value)} />
                </div>
                {cuidadValido ? " " : <Grid item xs={12}> <Alert severity="error">El nombre no puede tener numeros o caracteres</Alert>
                </Grid>}
                <div className="col-md-12 ">
                  <label htmlFor="inputState" className="form-label">Cumpleaños</label><br />
                  <input className='date' type="date" name="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                {dateValido ? " " : <Grid item xs={12}> <Alert severity="error">La fecha de nacimiento no puede ser una fecha futura</Alert>
                </Grid>}
                {desactivar ? <div className='modalLoading'><Button variant="contained" onClick={completarEditPerfil} disabled={desactivar} >{guardarCambios}</Button> <LoadingModal /></div>
                  : <div style={{ display: 'flex', justifyContent:'left', alignItems: 'center',gap:'10px' }}>
                  <Button variant="contained" onClick={completarEditPerfil} sx={{ marginTop: '2rem', width: '200px',fontSize:'14px' }} disabled={desactivar} >{guardarCambios}</Button>
                  <Button variant="contained" onClick={() => editPerfil()} sx={{ marginTop: '2rem', width: '100px',fontSize:'14px' }} disabled={desactivar} >Cerrar</Button>
                  </div>}
                {datosValido ? <Grid item xs={12}> <Alert severity="error">Revise los campos existe errores </Alert>
                        </Grid> : " "}
              </form>
            </div>
          </Grid>

        </Box>
      </Modal>
    </div>
  );
}