import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Pedido = ({ producto, comprarProducto, compras,  setCompras }) => {

 const disminuirSeleccion = (idProducto, nombre, costo, cantidad) => {
   if(cantidad > 1){
      const clonarCompras = [...compras]
     clonarCompras.forEach((producto, index) => {
        if(producto.id === idProducto){
           const cantidad = clonarCompras[index].cantidad
           const costo = clonarCompras[index].costo
          clonarCompras[index] = {
              id: idProducto,
              nombre: nombre,
              costo: costo-(costo/cantidad),
              cantidad: cantidad -1
             }
             setCompras(clonarCompras)

         } 
     })
   }
   return;
 }

 const borrarProducto = (idProducto) => {

 }

  return (
    <div>
      <li>
        <div> {producto.nombre} </div>
        <div>
          <FontAwesomeIcon icon={faMinus} 
          onClick={() => disminuirSeleccion(producto.id, producto.nombre, producto.costo, producto.cantidad)}
          />
          {producto.cantidad}
          <FontAwesomeIcon icon={faPlus} 
          onClick={() => comprarProducto(producto.id, producto.nombre, producto.costo)}/>
        </div>
        <div> 
            costo:{producto.costo}
             </div>
        <div>
     
          <FontAwesomeIcon icon={faTrashAlt}
          onClick={() => borrarProducto(producto.id)} />
        </div>
      </li>
    </div>
  );
};

export default Pedido;
