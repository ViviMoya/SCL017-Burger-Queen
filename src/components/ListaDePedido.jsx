import React from 'react'
import Pedido from './Pedido'

const ListaDePedido = ({ compras, comprarProducto,  setCompras }) => {
  return (
    <div>
      <ul>
      {compras.map((producto) => {
        return (
         <Pedido 
         key={producto.id}
         producto={producto}
         comprarProducto={comprarProducto}
         compras={compras}
         setCompras={setCompras}
         /> 
        )
      })}
      </ul>
    </div>
  )
}

export default ListaDePedido
