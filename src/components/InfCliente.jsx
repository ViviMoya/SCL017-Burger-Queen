import React from "react";
import { Link } from "react-router-dom";

const InfCliente = ({ infMesa, setInfMesa, infNombre, setInfNombre }) => {
  const guardarInformacion = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Llenar campos para nuevo pedido</h3>
     
<form onSubmit={guardarInformacion}>
<div>
        <label htmlFor="mesa">Mesa número: </label>
        <input
          type="text"
          name="mesa"
          value={infMesa}
          onChange={(e) => setInfMesa(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Nombre:"> Nombre de Cliente:</label>
        <input
          type="text"
          name="Nombre"
          value={infNombre}
          onChange={(e) => setInfNombre(e.target.value)}
        />
      </div>
      <br />
      <Link to="/menu">
        <button>INICIAR PEDIDO</button>
      </Link>
</form>
<br />
     <Link to="/"> <button>volver</button></Link>
    </div>
  );
};

export default InfCliente;
