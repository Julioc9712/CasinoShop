import React from 'react'
import './AgregarProducto.css'
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../../firebase/firebaseConfig';
import { addDoc, doc, setDoc } from 'firebase/firestore';



function AgregarProducto() {
    const [categoria, setCategoria] = useState("")
    const [nombreProduct, setNombreProduct] = useState("")
    const [fileImg, setFileImg] = useState(null)
    const [subtitulo, setSubtitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [tipoProducto, setTipoProducto] = useState("")

    const options = [
        { key: 0, label: "Selecciona una categoria", },
        { key: 1, label: "Electrodomestico", value: "Electrodomestico" },
        { key: 2, label: "Moto Electrica", value: "Moto Electrica" },
        { key: 3, label: "Celulares", value: "Celulares" }
    ]
    function handleSelect(e) {
        setCategoria(e.target.value)
        console.log(categoria)
    }

    async function imgStorage(file) {
        const storageRef = ref(storage, nombreProduct)
        await uploadBytes(storageRef, file)
        const url = await getDownloadURL(storageRef)
        return url
    }
    function handleSubmit(e) {
        e.preventDefault();
        async function newProduct() {
            const urlImg = await imgStorage(fileImg)
            const productoDoc = doc(db, 'Productos', nombreProduct)
            const docRef = await setDoc(productoDoc, {
                Categoria: categoria,
                Nombre: nombreProduct,
                Tipo:tipoProducto,
                Img: urlImg,
                Subtitulo: subtitulo,
                Descripcion: descripcion,
                Precio: precio,
                Disponibilidad: "En Stock",
                Cantidad: 1
            })

        }

        newProduct()
        setCategoria("")
        setNombreProduct("")
        setFileImg("")
        setSubtitulo("")
        setDescripcion("")
        setPrecio("")


    }
    return (


        <div className='contenedor-agregarProducto'>
            <h1>Agregar Producto</h1><br />
            <form className="row  g-2 flex-column" onSubmit={handleSubmit}>
                <label  className="form-label">Categoria</label>
                <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                    {options.map(option => (<option key={option.key} value={option.value}>{option.label}</option>))}
                </select>
                <div className="col-md-12">
                    <label  className="form-label">Nombre</label>
                    <input type="text" className="form-control"  placeholder='Nombre' value={nombreProduct} onChange={e => { setNombreProduct(e.target.value) }} />
                </div>
                <div className="col-md-12">
                    <label  className="form-label">Tipo</label>
                    <input type="text" className="form-control"  placeholder='Tipo de producto' value={tipoProducto} onChange={e => { setTipoProducto(e.target.value) }} />
                </div>
                <div className="col-md-12">
                    <label  className="form-label">Imagen</label>
                    <input type="file" className="form-control"  placeholder='Nombre' onChange={e => setFileImg(e.target.files[0])} />
                </div>
                <div className="col-12">
                    <label  className="form-label">Subtitulo</label>
                    <input type="text" className="form-control"  placeholder="Subtitulo" value={subtitulo} onChange={e => { setSubtitulo(e.target.value) }} />
                </div>
                <div className="col-12">
                    <label  className="form-label">Descripcion</label>
                    <input type="text" className="form-control"  placeholder="Descripcion" value={descripcion} onChange={e => { setDescripcion(e.target.value) }} />
                </div>
                <div className="col-12">
                    <label  className="form-label">Precio </label>
                    <input type="text" className="form-control"  placeholder="#Precio" value={precio} onChange={e => { setPrecio(e.target.value) }} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Agregar producto</button>
                </div>
            </form>
        </div>

    )
}

export default AgregarProducto