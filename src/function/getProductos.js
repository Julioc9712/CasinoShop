import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function getProductos() {
  const collectionRef=collection(db, "Productos")
  const querySnapshot = await getDocs(collectionRef)
  const docs = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })

  })
  

  return docs
}