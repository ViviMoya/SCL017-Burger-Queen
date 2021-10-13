import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
   return (
      <div>
        <header><h1>BIENVENIDO</h1></header>
         <main><h3>Escoge tu rol:</h3>
         <div>
            <Link to='/informacion'>
            <button>MESERO</button>
            </Link>
            </div>
         <div>
         <Link>
            <button>COCINERO</button>
            </Link>
            </div></main>
         <footer> <p> Que tengas un buen día de trabajo en <span>Burguer-Queen.-</span> </p></footer>
      </div>
   )
}

export default Inicio
