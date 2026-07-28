import './Tarjeta.css'
import Boton from '../Boton/Boton';
import Estrellas from '../Estrellas/Estrellas';

// Componente que genera la tarjeta para presentar los productos en la aplicacion

// producto -> nombre del producto
// precio -> precio del producto
// rating -> calificacion del producto
// img -> imagen del producto
// valor -> valor del boton cuando es presionado
// link -> URL a donde el boton dirigira al usuario cuando el mismo sea presionado
// click -> funcion que ejecutara el boton cuando sea presionado
// unidades -> cantidad de unidades del producto
// msg -> mensaje que tendra el boton de la tarjeta
// bg -> color de fondo para el boton de la tarjeta
// txt -> color del texto para el boton
// id -> ID para el contenedor de la tarjeta

function Tarjeta({producto, precio, rating, img, value, link, click, unidades = null,
  msg = 'Más información', bg = '#3E8EDE', txt = '#1B1B1B', id='info'
}){
  return(
    // Desarrollo del componente
    <>
      <div className="card rounded-4" id={id}>
        <img src={img} className="card-img-top" alt={producto} id='t' />
        <div className="card-body">
          <h5 className="text card-title" id='title'>{producto}</h5>
          {/* Componente que se encarga de generar las estrellas para ver
          la calificacion de un producto en las tarjetas */}
          <Estrellas cantidad={rating} colorE={'#1B1B1B'} />
          <p className="card-text mb-0" id='price'>${precio}</p>
          <p className="card-text">{unidades}</p>
          <div className="support text-center">
            {/* Componente que pinta un boton dentro de la tarjeta */}
            <Boton bg={bg} TextColor={txt} msg={msg}
              id={'info'} FontSize={'1.2rem'} value={value} To={link} click={click}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarjeta;