import { useContext,  useState,createContext } from "react";
import { AuthContext } from "./userContext";
import {  doc,  setDoc } from 'firebase/firestore'
import { db } from './../firebase/firebaseConfig'
import getUsuario from './../function/getUsuario';



export const CarritoContext = createContext()

export default function CarritoProvider({ children }) {
    const auth = useContext(AuthContext)
    const [carrito, setCarrito] = useState([])
    const [usuario, setUsuario] = useState({})


    const getUsuarioByID= async ()=>{
        const infoUsuarioById=await getUsuario()
        setCarrito(infoUsuarioById.carrito)
        setUsuario(infoUsuarioById)

    }
    getUsuarioByID()


    function CantidadItem() {
        const cantidadItems = []
        const carritoCantidad = carrito.forEach((suma) => {
            cantidadItems.push(suma.Cantidad)
        })
        let suma = cantidadItems.reduce((total, numero) => total + numero, 0);
        return suma
    }

    function PrecioTotal() {
        const precioItems = []
        const carritoCantidad = carrito.forEach((suma) => {
            precioItems.push(suma.Cantidad * suma.Precio)

        })
        let suma = precioItems.reduce((total, numero) => total + numero, 0);
        return suma
    }


    function AñadirProducto(producto, productCantidad = 1) {
        if (carrito.find(item => item.id === producto.id)) {
            const productos = carrito.map(item => item.id === producto.id
                ? { ...item, Cantidad: item.Cantidad + productCantidad }
                : item
            )
            async function perfilUsuarioEdit() {
                const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
                const docRef = await setDoc(usuarioEdit, { ...usuario, carrito: [...productos] })

            }
            return perfilUsuarioEdit()

        }
        async function perfilUsuarioEdit() {
            const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
            const docRef = await setDoc(usuarioEdit, { ...usuario, carrito: [...carrito, { ...producto }] })

        }
        perfilUsuarioEdit()


    }

    function EliminarProducto(id) {
        const temp = [...carrito]
        const eliminarItem = temp.filter(item => item.id !== id)
        async function perfilUsuarioEdit() {
            const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
            const docRef = await setDoc(usuarioEdit, { ...usuario, carrito: [...eliminarItem] })

        }
        perfilUsuarioEdit()


    }

    function DisminuirCantidad(producto) {
        if (carrito.find(item => item.id === producto.id)) {
            const productos = carrito.map(item => item.id === producto.id
                ? { ...item, Cantidad: item.Cantidad - 1 }
                : item
            )
            async function perfilUsuarioEdit() {
                const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
                const docRef = await setDoc(usuarioEdit, { ...usuario, carrito: [...productos] })

            }
            return perfilUsuarioEdit()
        }
    }

    function VaciarCarro() {
        async function VaciarCarrito() {
            const usuarioEdit = doc(db, 'usuarios', auth.user.uid)
            const docRef = await setDoc(usuarioEdit, { ...usuario, carrito: [] })
        }
        VaciarCarrito()
        setCarrito([])
    }

    return (
        <CarritoContext.Provider value={{ carrito,usuario,PrecioTotal, CantidadItem, AñadirProducto, EliminarProducto, VaciarCarro, DisminuirCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}