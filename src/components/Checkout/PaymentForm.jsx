import React, { useContext } from 'react'
import Review from './Review'
import { Button, Divider, Typography } from '@mui/material'
import { CarritoContext } from '../../context/carritoContext'
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseConfig';
import { AuthContext } from '../../context/userContext';
import { useState } from 'react'
import LoadingModal from '../perfil/LoadinModal'
import { useNavigate } from 'react-router-dom'



const stripePromise = loadStripe("pk_test_51HQ979HQf3hGzTFBvfhzZz0tjm98F05NL3Meni50U3nqBKUfCQ")

function PaymentForm({ handleNext, handleBack, infoPedido }) {

  const contextCarro = useContext(CarritoContext)
  const [pedidoCompra, setPedidoCompra] = useState({})
  const authUser = useContext(AuthContext)
  const [editando, setEditando] = useState(false)
  const navigate = useNavigate()

  async function getPedido() {
    const collectionRef = collection(db, 'pedidos')
    const docRef = doc(collectionRef, authUser.user.uid);
    const userDoc = await getDoc(docRef)
    const infoUserPedido = userDoc.data()

    return setPedidoCompra(infoUserPedido)

  }
  getPedido()



  function pedidoCompletado() {

    async function pedidos() {
      const collectionRef = collection(db, 'pedidos')
      const docRef = doc(collectionRef, authUser.user.uid)
      const editPedido = await setDoc(docRef, {pedidoUser:[...pedidoCompra.pedidoUser,{ id:crypto.randomUUID(),datosUser: {...infoPedido}, pedido: [...contextCarro.carrito ], date:  new Date }]})
    }
    
    setTimeout(() => {
      contextCarro.VaciarCarro()
      navigate('/pedido realizado')
      

    }, 5000);
    
    pedidos()
    // pedidoUserPerfil()
    setEditando(true)



  }


  return (
    <div>
      <Review />
      <Divider sx={{ borderBottom: '2px solid black' }} />
      <Typography variant='h5' marginTop='1rem' marginBottom='1rem' fontWeight='600'>Metodo de Pago</Typography>
      <Elements stripe={stripePromise}>

        <CardElement />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button onClick={handleBack} type='submit' variant='contained'>Atras</Button>
          {editando ? <Button sx={{ width: '200px', fontSize: '12px', marginTop: '5px', height: '40px' }} disabled>Pagando... <LoadingModal /></Button>
            : <Button variant='contained' onClick={pedidoCompletado} >Pagar:${contextCarro.PrecioTotal()}</Button>}

        </div>

      </Elements>



    </div>
  )
}

export default PaymentForm