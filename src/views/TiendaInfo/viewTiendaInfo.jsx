import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import NavLateral from '../../components/nav/NavLateral'
import TiendaInfo from './TiendaInfo'

function ViewTiendaInfo() {
    return (
        <>
            <Nav />
            <NavLateral />
            <Search />
            <TiendaInfo/>
            <Footer />
        </>
    )
}

export default ViewTiendaInfo