import React from 'react'
import Nav from '../../components/nav/Nav'
import SignIn from '../../components/formInicio/FormInicio'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'

function ViewsLogin() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <SignIn/>
    <Footer/>
    </>
  )
}

export default ViewsLogin