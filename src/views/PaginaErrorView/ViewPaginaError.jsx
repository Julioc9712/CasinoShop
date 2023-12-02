import React from 'react'
import Nav from '../../components/nav/Nav'
import NavLateral from '../../components/nav/NavLateral'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import PaginaError from '../../components/PaginaError/PaginaError'


function ViewPaginaError() {
  return (
    <>

    <Nav/>
    <NavLateral/>
    <Search/>
    <PaginaError/>
    <Footer/>
    

    </>
  )
}

export default ViewPaginaError