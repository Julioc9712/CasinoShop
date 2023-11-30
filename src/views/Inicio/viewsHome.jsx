import React from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import Novedades from '../../components/novedades/Novedades'
import Categoria from '../../components/Categorias/Categoria'
import Servicio from '../../components/Servicio/Servicio'
import ProductosVendidos from '../../components/ProductoVendidos/ProductosVendidos'
import Copyright from '../../components/Copyright/Copyright'
import NavLateral from '../../components/nav/NavLateral'



function ViewsHome() {
  return (
    <>
    <Nav/>
    <NavLateral/>
    <Search/>
    <Carousel/>
    <Info/>
    <Novedades/>
    <Categoria/>
    <ProductosVendidos/>
    <Servicio/>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default ViewsHome