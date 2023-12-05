import React, { useEffect, useState } from 'react'
import "./Search.css"
import getProductos from '../../function/getProductos'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js';

function Search() {
  const [buscarProducto, setBuscarProducto] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [showOptions, setShowOptions] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    async function getProducto() {
      const products = await getProductos()
      setBuscarProducto(products)
    }
    getProducto()
  }, [])

  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setShowOptions(true);
      setInputValue(e.target.value)
    } else {
      setShowOptions(false);
      setInputValue(e.target.value)
    }
  }
  function itemId() {
    const productos = []
    buscarProducto.map(item =>
      productos.push({ id: item.id, nombre: item.Nombre })
    )
    return productos
  }

  function buscador(e) {
    //   const isVerificProduct=buscarProducto.find(product => (product.id === inputValue))
    //    if (isVerificProduct){
    //     navigate(`/producto/${inputValue}`)
    //   }else{
    //     navigate('/producto/error')
    //   }

    e.preventDefault()
    const options = {
      keys: ['id'], // Campo en el que se buscará
      threshold: 1.0, // Umbral de coincidencia
    }
    const fuse = new Fuse(itemId(), options);
    const resultado = fuse.search(inputValue)
    if (resultado[0] !== undefined) {
      navigate(`/producto/${resultado[0].item.id}`)
    } else {
      navigate('/producto/error')
    }
    console.log(resultado[0].item.id)

  }

  return (
    <>
      <div >
        <form className='search' onSubmit={buscador}>
          <input type="text" placeholder='¿Qué estás buscando?' list='productos' value={inputValue} onChange={handleChange} />
          <button onClick={buscador} className='btn'><i className="bi bi-search"></i></button>

          {showOptions &&
            <datalist id='productos'>
              {buscarProducto.map(product => (
                <option value={`${product.id}`} key={product.id}></option>

              ))}

            </datalist>}

        </form>

      </div>
    </>
  )
}

export default Search