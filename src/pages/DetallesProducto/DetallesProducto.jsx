import { useParams,useNavigate } from "react-router-dom";
import ObtenerDetallesProducto from "../../services/ObtenerDetallesProducto.js";
import Cargando from "../../components/Cargando/Cargando";
import { useContext, useEffect, useState } from "react";
import './DetallesProducto.css'
import Estrellas from "../../components/Estrellas/Estrellas";
import ObtenerRatings from "../../services/ObtenerRating.js";
import { CantidadContexto } from "../../context/CantidadContexto";
import IconImg from "../../components/IconImg/IconImg";
import Reseña from "../../components/Reseña/Reseña";
import BotonCompleto from "../../components/BotonCompleto/BotonCompleto";
import GuardarAlCarrito from "../../services/GuardarAlCarrito.js";

// Pagina que se encarga de mostrar los detalles de un producto seleccionado por el usuario

function DetallesProducto(){
  // Recupero el parametro de la URL que seria el ID del producto
  const {id} = useParams();
  const {cantidad, aumentar, disminuir} = useContext(CantidadContexto);
  // Variable para almacenar los datos del producto seleccionado
  let datos;
  // Estado que se encarga de guardar el precio del producto seleccionado
  const [estatico, setEstatico] = useState(0)
  // Estado que se encarga de guardar el precio dinamico del producto dependiendo
  // de la cantidad de unidades que seleccione el usuario.
  const [precio, setPrecio] = useState(0)
  // Estado que guardara si la pestaña se encuentra cargando o ya termino
  const [carga, setCarga] = useState(<Cargando mt={'2rem'}/>);
  // Estado que almacenara todos los datos del producto seleccionado
  const [storage, setStorage] = useState([])
  // Estado que se encarga de guardar la imagen del producto
  const [imagenes, setImagenes] = useState([])
  // Estado que se encarga de guardar la calificacion del producto
  const [rating, setRating] = useState([])
  // Preparo una funcion para navegar por la aplicacion web
  let navigate = useNavigate();
  // Obtengo el elemento que simula una pagina cargando
  const exito = document.getElementById('advice')
  const CargaDatos = () => {
    // Obtengo los detalles del producto seleccionado por el usuario
    ObtenerDetallesProducto(id).then(ans => {
      // Obtengo el contenedor que guarda toda la informacion del producto
      const contenedor_contenido = document.getElementById('contenido');
      datos = ans;
      // Si no existen datos para ese producto se redirige al usuario a una pagina
      // de error.
      if(!datos){
        navigate('/fallo');
      }
      // Coloco en cada estado se respectivo valor y oculto la pantalla de carga
      // para mostrar la informacion relacionada con el producto seleccionado.
      setCarga(null);
      setStorage(datos)
      setImagenes(datos['images'])
      setRating(datos['reviews'])
      setPrecio(datos['price'])
      setEstatico(datos['price'])
      contenedor_contenido.hidden = false;
    })
  }
  // Cuando se cargue el componente se ejecutara la funcion que se encuentra dentro
  // del useEffect().
  useEffect(() =>{
    CargaDatos()
  },[])

  // Cuando React detecte cambios en la variable "cantidad" se ejecutara la funcion
  // que se encuentra dentro del useEffect().
  useEffect(()=>{
    setPrecio((estatico * cantidad).toFixed(2))
  },[cantidad]) 
  return(
    <section className="container-md" id="cMayor">
      <div className="row mt-3" id="loading-container">
        <div className="col">
          {carga}
        </div>
      </div>
      {/* Aqui empiezo a mostrar la informacion del producto */}
      <div id="contenido" hidden>
        <div className="row" id="caro">
          <div id="carouselExample" className="carousel slide">
            {/* Genero las imagenes dependiendo de las que me entregue la API */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imagenes.at(0)} className="d-block w-100" alt={storage['title']} id="cimg" />
              </div>
              {imagenes.slice(1,-1).map((img) =>(
                <div className="carousel-item" key={img}>
                  <img src={img} className="d-block w-100" alt={storage['title']} id="cimg" />
                </div>
              ))}
            </div>
            {/* Botones del carrusel para ir a la imagen posterior o anterior */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span id="move" className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button  className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" id="next">
              <span id="move" className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Titulo del producto */}
        <div className="row">
          <div className="col" id="npro">
            <h1>{storage['title']}</h1>
          </div>
        </div>
        {/* Muestro la calificacion del producto utilizando estrellas */}
        <div className="row">
          <div className="col" id="npro">
            <Estrellas cantidad={ObtenerRatings(rating)} size={'1.4rem'}/>
          </div>
        </div>
        {/* Precioa del producto */}
        <div className="row">
          <div className="col mt-2" id="npro">
            <h3 aria-label="precio del producto">${precio}</h3>
          </div>
        </div>
        {/* Seleccionador de unidades del producto utilizando el componente de 
        IconImg */}
        <div className="row">
          <div className="col" id="counter">
            <IconImg icon={"bi bi-dash"} color={'white'} bg={'#1B1B1B'}
            top={'.01rem'} side={'.5rem'} click={disminuir} />
            <h3 aria-label="cantidad el producto">{cantidad}</h3>
            <IconImg icon={"bi bi-plus"} color={'white'} bg={'#1B1B1B'}
            top={'.01rem'} side={'.5rem'} click={aumentar} />
          </div>
        </div>
        {/* Boton que permite guardar en el carrito el producto con las configuraciones'
        realizadas */}
        <div className="row mt-3 mb-4">
          <BotonCompleto ListaTextos={['Agregar al carrito']} bg={'#3E8EDE'}
          id={'agregar'} fontsize={'1.5rem'} click={() => {
            GuardarAlCarrito(storage['title'],ObtenerRatings(rating),precio,cantidad,imagenes.at(0),storage['id'])
            exito.hidden = false;
          }}/>
        </div>
        {/* Parrafo que permite avisar al usuario que el producto fue guardado
        en el carrito satisfactoriamente */}
        <p hidden id="advice">Producto guardado en el carrito 
          <i className="bi bi-check-circle-fill ms-2"></i>
        </p>
        {/* Apartado para la descripcion del producto */}
        <div className="row">
          <div className="col mt-4" id="npro">
            <h1>Descripción</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-start">
            <h5 aria-label="descripcion del producto">
              {storage['description']}
            </h5>
          </div>
        </div>
        {/* Apartado para las reseñas del producto */}
        <div className="row">
          <div className="col mt-4" id="npro">
            <h1 className="mb-0">Reseñas</h1>
          </div>
        </div>
        {/* Se generaran tantas tarjetas de reseña como reseñas disponibles del producto */}
        {rating.map((rate) =>(
          <div className="row" key={rate.reviewerName+1}>
            <div className="col mt-4">
              {/* Componente que permite pintar tarjetas diseñadas para presentar
              las reseñas de un producto. */}
              <Reseña calificacion={rate.rating} comentario={rate.comment}
              nombre={rate.reviewerName}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetallesProducto;