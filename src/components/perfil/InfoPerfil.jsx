import React, { useState,useContext } from 'react'

import { AuthContext } from '../../context/userContext';
//Firestor-Config
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/firebaseConfig'

//Material UI
import { Button } from '@mui/material';
import LoadingModal from './LoadinModal';
import { Link } from 'react-router-dom';




function InfoPerfil({ editPerfil, userRef }) {
    const auth = useContext(AuthContext)
    
    const [editImg, setEditImg] = useState(true)
    const [editando, setEditando] = useState(false)
    const [fileImg, setFileImg] = useState("")


    function cerraSesion() {
        auth.logout()
   
    }

    function handleClick() {
        editPerfil()
    }
    function editarImagen() {
        setEditImg(!editImg)
    }


    async function imgStorage(file) {
        const storageRef = ref(storage, userRef.nombre)
        await uploadBytes(storageRef, file)
        const url = await getDownloadURL(storageRef)
        return url
    }

    function completarEditPerfil() {
        setTimeout(() => {
            setEditando(false)
            setEditImg(!editImg)
        }, 20000);

        async function CambiarImg() {
            const urlImg = await imgStorage(fileImg)
            const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
            const docRef = await setDoc(usuarioEdit, { ...userRef, img: urlImg })

        }
        CambiarImg()
        setEditando(true)

    }



    return (
        <div className='conteainer-perfil'>

            <div className='contenedor-enlacesPerfil'>
                <img src={userRef.img} className="img-perfilPeque" alt="..." />
                <p>{userRef.nombre} {userRef.apellidos}</p>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/pedidos">Pedidos</Link></li>
                    <li className="list-group-item"><Link to="/carrito">Carrito</Link></li>

                </ul><br />
                <button type="button" className="btn btn-danger" onClick={cerraSesion}><a href="/" style={{textDecoration:'none',color:'white'}}>Cerrar Sesion</a></button>
            </div>
            <div className='contenedorDatosImg'>
                <div className='contenedor-datosPerfil'>
                    <form className="row  g-2 flex-column">
                        <div className="col-md-12">
                            <label className="form-label">Email</label>
                            <p className="form-control">{userRef.email}</p>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Nombre</label>
                            <p className="form-control">{userRef.nombre}</p>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Apellidos</label>
                            <p className="form-control">{userRef.apellidos}</p>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Telefono (Opcional)</label>
                            <p className="form-control">{userRef.telefono}</p>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">City (Opcional)</label>
                            <p className="form-control">{userRef.cuidad}</p>
                        </div>
                        <div className="col-md-12 ">
                            <label className="form-label">Cumpleaños</label><br />
                            <p className="form-control">{userRef.date}</p>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={() => handleClick()}>Editar Perfil</button>
                        </div>
                    </form>
                </div>
                <div className='foto-perfil'>
                    <img src={userRef.img} className="img-thumbnail" alt="Foto de Perfil" />
                    {editImg ? <Button variant="contained" sx={{ width: '150px', marginTop: '5px' }} onClick={editarImagen}>Editar imagen</Button>
                        : <div>
                            {editando ?
                                <Button variant="contained" sx={{ width: '200px', fontSize: '12px', marginTop: '5px', height: '40px' }} disabled>Guardando...<LoadingModal /></Button>
                                :
                                <div className='editImagen'>
                                    <input type="file" className="fileImg" onChange={e => setFileImg(e.target.files[0])} />
                                    <Button variant="contained" sx={{ width: '165px', fontSize: '12px', marginTop: '5px' }} onClick={completarEditPerfil}>Guardar Cambios</Button>
                                </div>}

                        </div>

                    }


                </div>
            </div>



        </div>
    )
}

export default InfoPerfil