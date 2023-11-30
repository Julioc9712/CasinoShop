import React from 'react'
import Nav from '../../components/nav/Nav'
import NavLateral from '../../components/nav/NavLateral'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import ProductoById from '../../components/productos/ProductoById'

function viewProducto() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <ProductoById/>
    <Footer/>
    </>
  )
}

export default viewProducto