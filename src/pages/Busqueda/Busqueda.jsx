import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RealizarBusqueda from '../../services/RealizarBusqueda.js'
import Cargando from '../../components/Cargando/Cargando.jsx'
import Tarjeta from '../../components/Tarjeta/Tarjeta.jsx'
import ObtenerRatings from '../../services/ObtenerRating.js'

// Pagina que presenta los productos encontrados en una busqueda

function Busqueda(){
  // Preparo una funcion para navegar por las rutas de la aplicacion web
  const navigate = useNavigate()
  // Obtengo de la URL el parametro que se paso en la misma, seria el ID del producto
  // que se quiere buscar.
  const {producto} = useParams()
  // Array que contendra los productos encontrados, sera un estado de React.
  const [productos, setProductos] = useState([]);
  // Variable que guardara los productos que coinciden con la busqueda
  let info;
  // Funcion que realiza la peticion a la API para realizar la busqueda
  const buscar = () => {
    // Se realiza la busqueda de los productos realizando una peticion a la API de
    // DummyJSON
    RealizarBusqueda(producto).then((ans) => {
      // Obtengo el elemento que simula una pantalla de carga
      const cargando = document.getElementById('loader');
      // La variable info sera igual a los datos obtenidos de la peticion a la API
      info = ans;
      // Si no se encontraron resultados se redireccionara al usuario a una ventana
      // que enseña el error al usuario
      if(!info){
        navigate('/fallo')
        return
      }
      // Si los productos fueron encontrados se oculta la pantallade carga
      // y guardan los productos en su respectiva variable.
      cargando.hidden = true;
      setProductos(info['products'])
    } 
  )}
  // Apenas se cargue este componente se ejecutara la funcion que se encuentra
  // dentro del useEffect().
  useEffect(() => {
    buscar()
  },[])
  return(
    <section className="container md">
      <h1 className='text-center mt-4 mb-3'>Resultados para: {producto}</h1>
      <div className="row" id='loader'>
        <div className="col">
          <Cargando mt={'2rem'} />
        </div>
      </div>
      <div className="row" id='searched'>
        {/* Aqui se coloca las tarjetas con los resultados de la busqueda
        de manera secuencial se generan tantas tarjetas como productos encontrados */}
        {productos.map((pro) => (
          <div className="col" key={pro.id+1}>
            {/* Componente que carga una tarjeta para presentar la informacion
            encontrada para cada uno de los productos. */}
            <Tarjeta img={pro['images'].at(0)} producto={pro.title} 
            rating={ObtenerRatings(pro.reviews)} precio={pro.price} 
            link={`/producto/${pro.id}`}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Busqueda;