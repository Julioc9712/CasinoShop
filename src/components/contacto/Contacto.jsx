import React, { useState } from 'react'
import './Contacto.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Contacto() {
    const form = useRef();
    const [email, setEmail] = useState("Enviar Mail")
    const [send, setSend] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setEmail("Enviando...")

        emailjs.sendForm('service_5m81sa2', 'template_o3e9ovd', form.current, 'GdpOHjsFsRvdO1iVI')
            .then((result) => {
                setEmail("Enviar Mail")
                setSend(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className='contenedor-contacto' id='Contacto'>
            <div className='bg-contacto' data-aos="zoom-out">
                <h1 className='titulo-contacto'>Contáctanos!</h1>
                <div className='contacto-flex'>
                    <div className='contacto-info' >
                        <h1>Tienes alguna duda?🤔 </h1>
                        <h2>Contáctanos!</h2>
                        <p>¿Tienes preguntas o comentarios? Usa el siguiente formulario para dejarnos un mensaje.Le responderemos lo mas rapido posible .Gracias ante todo </p>
                        <h5>📧 juliocmr97@gmail.com</h5>
                        <h5>📲 +5352990719</h5>
                    </div>
                    <div className="mb-3" >
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                            <input type="tex" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" name="name" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Dirección de Correo</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escribe sus dudas o surgerencias' name="message"></textarea>
                            <input type="submit" value={email} className='btn btn-primary btn-contacto' />
                            {send ? <div className="alert alert-primary" role="alert"> 📧 Mensaje enviado con exito 😁</div> : ""}
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacto