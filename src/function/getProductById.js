import { db } from '../firebase/firebaseConfig';
import {doc,collection,getDoc} from "firebase/firestore"

async function getProductById(id){
    
    const collectionRef=collection(db, "Productos")
    const docuRef=doc(collectionRef, id)
    const snapDoc= await getDoc(docuRef)
    const producto=snapDoc.data()
    return producto
}

export default getProductById