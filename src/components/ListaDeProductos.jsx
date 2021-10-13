import React from 'react'

const ListaDeProductos = ({ menuDesayuno, menuAlmuerzo, adicionales, comprarProducto }) => {
  return (
    <div>
      <h4>DESAYUNOS</h4>
      {menuDesayuno.map((producto) => {
        return (
          <div key={producto.id}>
            <button
            onClick={() => comprarProducto(producto.id, producto.nombre, producto.costo) }
            >
              {producto.nombre} {producto.costo}
            </button>
          </div>
        );
      })}

      <h4>ALMUERZO</h4>
      {menuAlmuerzo.map((producto) => {
        return (
          <div key={producto.id}>
            <button 
             onClick={() => comprarProducto(producto.id, producto.nombre, producto.costo) }
            >
              {producto.nombre} {producto.costo}
            </button>
          </div>
        );
      })}

<h4>ADICIONALES</h4>
      {adicionales.map((producto) => {
        return (
          <div key={producto.id}>
            <button 
            onClick={() => comprarProducto(producto.id, producto.nombre, producto.costo) }
            >
              {producto.nombre} {producto.costo}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListaDeProductos;
