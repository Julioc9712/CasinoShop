import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import NavLateral from '../../components/nav/NavLateral'
import Footer from '../../components/footer/Footer'
import PedidosUser from '../../components/PedidosUser/PedidosUser'

function ViewPedido() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <PedidosUser/>
    <Footer/>
    </>
  )
}

export default ViewPedido