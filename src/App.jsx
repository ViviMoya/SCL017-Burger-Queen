import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfCliente from "./components/InfCliente";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";

const App = () => {

  const [infMesa, setInfMesa] = useState('');
  const [infNombre, setInfNombre] = useState('');

  const menuDesayuno = [
    { id: 1, nombre: "Café Americano", costo: 5 },
    { id: 2, nombre: "Cafe con Leche", costo: 7 },
    { id: 3, nombre: "Sandwich de jamón y queso", costo: 10 },
    { id: 4, nombre: "Jugo de frutas natural", costo: 7 },
  ];

  const menuAlmuerzo = [
    { id: 5, nombre: "Hamburguesa simple", costo: 10 },
    { id: 6, nombre: "Hamburguesa doble", costo: 15 },
    { id: 7, nombre: "Papas fritas", costo: 5 },
    { id: 8, nombre: "Aros de cebolla", costo: 5 },
    { id: 9, nombre: "Agua 500ml", costo: 5 },
    { id: 10, nombre: "Agua 750ml", costo: 7 },
    { id: 11, nombre: "Bebida/gaseosa 500ml", costo: 7 },
    { id: 12, nombre: "Bebida/gaseosa 750ml", costo: 10 },
  ];

  const adicionales = [
    { id: 13, nombre: "Queso", costo: 1 },
    { id: 14, nombre: "Huevo", costo: 1 },
  ];

  const [compras, setCompras] = useState([]);
  console.log(compras);

  const comprarProducto = (idProducto, nombre, costo) => {
    // Si no existe pedido, agregamos uno:
    if (compras.length === 0) {
      setCompras([
        { id: idProducto, nombre: nombre, costo: costo, cantidad: 1 },
      ]);
    } else {
      // usamos el operador de propagación
      const clonarCompras = [...compras];

      // veamos si nuestros productos comprados ya tienen el id del producto
      // que estamos comprando:
      const YaEstaComprado =
        clonarCompras.filter((productoComprado) => {
          return productoComprado.id === idProducto;
        }).length > 0;

      // si ya tenemos el producto agregado, debemos actualizar la propiedad "cantidad" y "costo"
      if (YaEstaComprado) {
        clonarCompras.forEach((producto, index) => {
          if (producto.id === idProducto) {
            const cantidad = clonarCompras[index].cantidad;
            const costo = clonarCompras[index].costo;
            clonarCompras[index] = {
              id: idProducto,
              nombre: nombre,
              costo: costo + costo / cantidad,
              cantidad: cantidad + 1,
            };
            setCompras(clonarCompras);
          }
        });
      } else {
        const clonarCompras = [...compras];
        clonarCompras.push({
          id: idProducto,
          nombre: nombre,
          costo: costo,
          cantidad: 1,
        });
        setCompras(clonarCompras);
      }
    }
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/Informacion">
            <InfCliente 
            infNombre={infNombre}
           setInfNombre={setInfNombre}
            infMesa={infMesa}
            setInfMesa={setInfMesa}
            />
          </Route>
          <Route path="/menu">
            <Menu
              menuDesayuno={menuDesayuno}
              menuAlmuerzo={menuAlmuerzo}
              adicionales={adicionales}
              comprarProducto={comprarProducto}
              compras={compras}
              setCompras={setCompras}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
