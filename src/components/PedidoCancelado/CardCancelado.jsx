import Boton from '../Boton/Boton';
import Estrellas from '../Estrellas/Estrellas';
import './CardCancelado.css'

// Componente para generar una card con informacion de los pedidos cancelados

// producto -> nombre del producto
// precio -> precio del producto
// rating -> calificacion del producto
// img -> imagen del producto
// click -> funcion que ejecuta el boton cuando es presionado
// unidades -> cantidad de unidades del producto
// id_card -> ID de la tarjeta
// id_boton -> ID del boton de la tarjeta

// ⚠️ Algunas props son opcionales
 
function CardPedido({producto, precio, rating, img, click, unidades,
  id_card, id_boton
}){
  return(
    <>
    {/* Desarrollo del componente */}
      <div className="lola card rounded-4" id={id_card}>
        <img src={img} className="card-img-top" alt={producto} id='t' />
        <div className="card-body" id='contenido'>
          <h5 className="text card-title" id='title'>{producto}</h5>
          {/* Componente que genera las estrellas para representar la 
          calificacion del producto */}
          <Estrellas cantidad={rating} colorE={'#1B1B1B'} />
          <p className="card-text mb-0" id='price'>${precio}</p>
          <p className="card-text">{unidades}</p>
        </div>
        <p className='text-center' id='cancelado'>Pedido Cancelado</p>
      </div>
    </>
  )
}

export default CardPedido;