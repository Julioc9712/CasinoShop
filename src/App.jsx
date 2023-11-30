import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/userContext.jsx'
import './index.css'

// Boostrap//
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


//Vistas de Paginas//
import ViewsContacto from './views/Contacto/viewsContacto.jsx'
import ViewsLogin from './views/Login/viewsLogin.jsx'
import ViewsRegister from './views/Register/viewsRegister.jsx'
import ViewsCategoriaElectro from './views/Producto/viewsCategoriaElectro.jsx'
import ViewsCategoriaMoto from './views/Producto/viewsCategoriaMoto.jsx'
import ViewsCategoriaCell from './views/Producto/viewsCategoriaCell.jsx'
import ViewsCarrito from './views/Carrito/viewsCarrito.jsx'
import ViewsHome from './views/Inicio/viewsHome.jsx'
import ViewPerfilUser from './views/PerfilUser/viewPerfilUser.jsx'
import Admin from './views/Admin/Admin.jsx'
import ViewProducto from './views/Producto/viewProducto.jsx'
import CarritoProvider from './context/carritoContext.jsx'
import CheckoutView from './views/CheckoutView/checkoutView.jsx'
import ViewTiendaInfo from './views/TiendaInfo/viewTiendaInfo.jsx'
import ViewPagoCompletado from './views/PagoCompletado/viewPagoCompletado.jsx'
import ViewPedido from './views/Pedidos/ViewPedido.jsx'





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ViewsHome />
    },
    {
      path: "/contacto",
      element: <ViewsContacto />
    },
    {
      path: "/login",
      element: <ViewsLogin />
    },
    {
      path: "/signup",
      element: <ViewsRegister />
    },
    {
      path: "/electrodomestico",
      element: <ViewsCategoriaElectro />
    },
    {
      path: "/motos",
      element: <ViewsCategoriaMoto />
    },
    {
      path: "/celulares",
      element: <ViewsCategoriaCell />
    },
    {
      path: "/carrito",
      element: <ViewsCarrito />
    },
    {
      path: "/perfil",
      element: <ViewPerfilUser />
    },
    {
      path: "/pedidos",
      element: <ViewPedido />
    },
    {
      path: "producto/:id",
      element: <ViewProducto />
    },
    {
      path: "/checkout",
      element: <CheckoutView/>
    },
    {
      path: "/tiendaInfo",
      element: <ViewTiendaInfo />
    },
    {
      path: "/pedido realizado",
      element: <ViewPagoCompletado />
    },

    {
      path: "/admin",
      element: <Admin />
    },

  ])
  return (
    <AuthProvider>
      <CarritoProvider>
        <RouterProvider router={router} />
      </CarritoProvider>
    </AuthProvider>

  )
}

export default App


