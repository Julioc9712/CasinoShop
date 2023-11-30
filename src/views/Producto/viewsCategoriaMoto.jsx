import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Electrodomesticos from '../../components/electrodomesticos/Electrodomesticos'
import Footer from '../../components/footer/Footer'
import Motos from '../../components/motos/Motos'
import NavLateral from '../../components/nav/NavLateral'

function ViewsCategoriaMoto() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <Motos/>
    <Footer/>
    </>
  )
}

export default ViewsCategoriaMoto