import React, { useEffect, useState } from 'react'
import "./Search.css"
import getProductos from '../../function/getProductos'
import { useNavigate } from 'react-router-dom'

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
  };

  function buscador() {

    navigate(`/producto/${inputValue}`)


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