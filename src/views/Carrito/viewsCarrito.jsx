import React from 'react'

import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'
import ProductoCarro from '../../components/carritoCompra/ProductoCarro'

function ViewsCarrito() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <ProductoCarro/>
    <Footer/>
    </>
  )
}

export default ViewsCarrito