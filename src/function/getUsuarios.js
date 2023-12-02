import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function getUsuarios() {
  const collectionRef=collection(db, "usuarios")
  const querySnapshot = await getDocs(collectionRef)
  const docs = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })

  })
  

  return docs
}