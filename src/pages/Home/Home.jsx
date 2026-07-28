import { useContext, useEffect, useState } from "react";
import { CrearContexto } from "../../context/CrearContexto";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import './Home.css'
import PedirProductos from "../../services/PedirProductos.js";
import Cargando from "../../components/Cargando/Cargando";
import ObtenerRatings from "../../services/ObtenerRating.js";

// Pagina de bienvenida para el usuario y muestra productos recomendados para el mismo.

// token => token
// name => nombre de usuario
// img => foto de perfil del usuario

function Home(){
  // Variable que obtiene los datos de sesion del usuario y los converite a formato JSON
  let informacion = localStorage.getItem('user');
  informacion = JSON.parse(informacion);
  // Estado que me permite guardar los productos devueltos por la API de DummyJSON.
  const [almacen, setAlmacen] = useState([])
  // Funcion que solicita productos a DummyJSON para mostrar al usuario
  const agregar = () => {
    // Obtengo los contenedores de la pantalla de carga y del contenido de esta sección.
    const cargando = document.getElementById('contenedor-cargando')
    const contenido = document.getElementById('row3')
    // Solicito los productos a la API
    const data = PedirProductos().then(ans =>{
      // Guardo los productos obtenidos de la API en el almacen y oculto la
      // pantalla de carga, mostrando ahora la informacion de los productos obtenidos.
      setAlmacen(ans)
      cargando.hidden = true;
      contenido.hidden = false;
    })
  }
  // Apenas se cargue el componente se ejecutara la funcion que se encuentra dentro
  // del useEffect().
  useEffect(()=>{
    agregar()
  },[])
  return(
    <section className="container-md" id="upper">
      <div className="row mt-4 mb-3" id="load">
        <div className="col">
          {/* Titulo dando la bienvenida al usuario por su nombre */}
          <h1 className="thome">Hola de nuevo {informacion['name']}</h1>
        </div>
        <div id="contenedor-cargando" className="text-center">
          {/* Componente que muestra una pantalla de carga */}
          <Cargando id={'esperar'} mt={'1rem'} />
        </div>
      </div>
      {/* Se generaran tantas tarjetas como productos entregados por la API de DummyJSON*/}
      <div className="row" id="row3" hidden>
        {almacen.map((producto) => (
          <div className="col" id="outside" key={producto['id']}>
            {/* Se genera una tarjeta que cuando se presiona el boton para obtener
            mas informacion de un producto se lleva al apartado para mostrar esa información. */}
            <Tarjeta value={producto['id']} producto={producto['title']}
            precio={producto['price']} img={producto['images'].at(0)} 
            rating={ObtenerRatings(producto['reviews'])} link={`/producto/${producto['id']}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home;