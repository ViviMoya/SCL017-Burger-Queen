import React from 'react'
import ListaDePedido from './ListaDePedido'
import ListaDeProductos from './ListaDeProductos'

const Menu = ({menuDesayuno, menuAlmuerzo, adicionales, comprarProducto, compras, setCompras}) => {
    return (
        <div>
            <h1>este es un menú</h1>
            <ListaDeProductos 
            menuDesayuno={menuDesayuno} 
            menuAlmuerzo={menuAlmuerzo} 
            adicionales={adicionales}
            comprarProducto={comprarProducto}
           
            /> 
            <ListaDePedido
             compras={compras}
             setCompras={setCompras}
             comprarProducto={comprarProducto}
             
            />
        </div>
    )
}

export default Menu
