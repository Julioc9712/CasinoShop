import './Perfil.css'
import ModalPerfil from './ModalPerfil'
import InfoPerfil from './InfoPerfil'
import {  useState } from 'react'
import getUsuario from '../../function/getUsuario';






function Perfil() {
   
    const [edit, setEdit] = useState(false)
    const [userRef, setUserRef] = useState({})




    const userInfoPerfil= async ()=>{
        const usuarioById= await getUsuario()
        setUserRef(usuarioById)
    }
    userInfoPerfil()
  


    function handleEdit() {
        setEdit(!edit)
    }
    return (
        <>
            {edit ? <ModalPerfil editPerfil={handleEdit} userRef={userRef} /> : <InfoPerfil editPerfil={handleEdit} userRef={userRef} />}

        </>

    )
}

export default Perfil