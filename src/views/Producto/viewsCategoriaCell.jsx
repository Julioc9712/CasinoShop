import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'

import Celulares from '../../components/celulares/Celulares'

import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'

function ViewsCategoriaCell() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <Celulares/>  
    <Footer/>
    </>
  )
}

export default ViewsCategoriaCell