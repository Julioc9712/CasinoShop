import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Electrodomesticos from '../../components/electrodomesticos/Electrodomesticos'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'

function ViewsCategoriaElectro() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <Electrodomesticos/>
    <Footer/>
    </>
  )
}

export default ViewsCategoriaElectro