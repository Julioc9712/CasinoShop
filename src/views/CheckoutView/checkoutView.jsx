import React from 'react'
import Nav from '../../components/nav/Nav'
import NavLateral from '../../components/nav/NavLateral'
import Search from '../../components/search/Search'
import Checkout from '../../components/Checkout/checkout'
import Footer from '../../components/footer/Footer'

function CheckoutView() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <Checkout/>
    <Footer/>
    </>
  )
}

export default CheckoutView