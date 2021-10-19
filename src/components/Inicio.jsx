import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
   return (
      <div className="container">
         <div className="row  mt-6">
            <div className="col-6">
        <header><h1>BIENVENIDO</h1></header>
         <main><h3>Escoge tu rol:</h3>
         <div className="d-flex gap-2 justify-content-start">
            <Link to='/informacion'>
            <button className="btn btn-lg btn-secondary text-dark">MESERO</button>
            </Link>
         <Link to=''>
            <button className="btn btn-lg btn-secondary text-dark">COCINERO</button>
            </Link>
            </div></main>
          
          
            </div>
         </div>
         <footer className="col-12 mb-0"> <p> Que tengas un buen día de trabajo en <span>Burguer-Queen.-</span> </p></footer>
      </div>
   )
}

export default Inicio
