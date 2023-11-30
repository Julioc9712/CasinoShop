import React from 'react'
import Nav from '../../components/nav/Nav'
import Contacto from '../../components/contacto/Contacto'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'

function ViewsContacto() {
  return (
    <>
      <Nav/>
      <NavLateral/>
      <Search/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default ViewsContacto