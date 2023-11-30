import { createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig"
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from './../firebase/firebaseConfig';



export const AuthContext = createContext()


export function AuthProvider({ children }) {

    const [user, setUser] = useState("")
    
    useEffect(() => {
        const userlogin = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                console.log("no hay usuario registrado")
                setUser("")
            } else {
                setUser(currentUser)
                
            }
        })
        return () => userlogin()
    }, [])

    const register = async (email, password,firstName,lastName,telefono,date) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
            .then(async (result)=>{
                const usuarioDoc = doc(db, 'usuarios', result.user.uid)
                const docRef= await setDoc(usuarioDoc,{
                    nombre: firstName,
                    apellidos: lastName,
                    email: email,
                    password: password,
                    telefono: telefono,
                    cuidad: " ",
                    date:date,
                    img:"https://firebasestorage.googleapis.com/v0/b/tiendaonlinecubana.appspot.com/o/perfilVacio.webp?alt=media&token=20ca7246-0ad2-4be7-8452-347c9b14bd3b",
                    carrito: [],
                    
                    
                })
                const pedidoDoc = doc(db, 'pedidos', result.user.uid)
                const pedidoRef= await setDoc(pedidoDoc,{pedidoUser: [{pedido: [],datosUser: [] ,date: new Date}]})

                .then((re)=>{
                    alert("Ha creado su usuario con exito. Disfruta de nuestra tienda de sus productos y promociones😁")
                })
            })
        

        
        
    }

    const login = async (email, password) => {
        
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            alert('Has iniciado sesion con exito. Disfruta..😁');              
          } catch (error) {
            alert('Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo.');
          }
        }
    
    const logout = async () => {
        const response = await signOut(auth)
        
    }
    
    return (
        <AuthContext.Provider value={{ register, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

