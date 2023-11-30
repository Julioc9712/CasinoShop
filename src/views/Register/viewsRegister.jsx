import React from 'react'
import Nav from '../../components/nav/Nav'
import SignUp from '../../components/formRegistro/formRegistro'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'


function ViewsRegister() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <SignUp/>
    <Footer/>
    </>
  )
}

export default ViewsRegister