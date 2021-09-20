import React from 'react';
import burger from '../images/burger.jpg'


function home () {
return (
   <div  class="grid">
    <img src={burger} class="img-fluid" class="img-responsive"/>
    <h1>BIENVENIDO</h1>
     <h3>escoge tu rol</h3> 
     <a class="btn btn-secondary btn-lg" href="#" role="button">MESERO</a>
     <a class="btn btn-secondary btn-lg" href="#" role="button">COCINERO</a>
     <h3>Que tengas un buen día de trabajo en</h3><h1>Burger-Queen</h1>
   </div>
); 
}

export default home;