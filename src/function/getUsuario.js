import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from './../firebase/firebaseConfig'
import { AuthContext } from '../context/userContext';
import { useContext } from 'react';



async function getUsuario() {
    const auth = useContext(AuthContext)
    const collectionRef= collection(db, 'usuarios')
    const docRef = doc(collectionRef, auth.user.uid);
    const userDoc = await getDoc(docRef)
    const getUsuario = userDoc.data()
    return getUsuario

}

export default getUsuario