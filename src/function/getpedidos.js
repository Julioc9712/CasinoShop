import { useContext } from "react"
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from './../firebase/firebaseConfig'
import { AuthContext } from '../context/userContext';




export default async function getPedidos() {
    const auth = useContext(AuthContext)
    const collectionRef = collection(db, "pedidos")
    const docRef = doc(collectionRef, auth.user.uid)
    const pedidosUser = await getDoc(docRef)
    const pedidoData = pedidosUser.data()
    return pedidoData.pedidoUser
}