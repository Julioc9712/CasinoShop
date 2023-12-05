import React, { useEffect, useState } from 'react'
import getPedidos from '../../function/getpedidos'
import { Grid, Paper } from '@mui/material'
import './PedidoUser.css'


function PedidosUser() {
    const [pedidoUserId, setPedidoUserId] = useState([])



    const getPedidoUser = async () => {
        const pedidoRef = await getPedidos()
        setPedidoUserId(pedidoRef)
    }
    getPedidoUser()





    return (

        <div className="contenedorPedidos" >
            <h2 style={{ textAlign: 'center', marginBottom: '7rem', marginTop: '5rem' }}>Pedidos Completados</h2>

            {pedidoUserId.slice(1).map(infoPedido => (
                <Grid item xs={6} sm={6} md={4} lg={2.4} key={infoPedido.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
                    <Paper className='paperPedidos'  >
                        <div className='fechaPedidoInfo'>
                            <h4>{new Date(infoPedido.date.seconds * 1000).toLocaleString()}</h4>
                            <p><strong>Nombre:</strong> {infoPedido.datosUser.firstName} {infoPedido.datosUser.lastName}</p>
                            <p><strong>Direccion:</strong> {infoPedido.datosUser.address}</p>
                            <hr />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'space-around', width: '100%', gap: '2rem', flexWrap: 'wrap' }}>
                            {infoPedido.pedido.map(item => (
                                <div key={item.Nombre} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

                                    <div>
                                        <p>{item.Categoria}</p>
                                        <p><strong>Cantidad: </strong>{item.Cantidad}</p>
                                        <p>{item.Nombre}</p>
                                        <p>Precio: ${item.Precio}</p>
                                        <hr />
                                    </div>
                                    <div>
                                        <img src={item.Img} style={{ width: '120px', height: '150px' }} />

                                    </div>
                                </div>
                            ))}
                        </div>

                    </Paper>

                </Grid>
            ))}
        </div>









    )
}

export default PedidosUser