import Boton from '../Boton/Boton';
import Estrellas from '../Estrellas/Estrellas';
import '../Tarjeta/Tarjeta.css'
import './CardPedido.css'

// Componente para generar la tarjeta con el pedido en su estado de confirmacion

// producto -> nombre del producto
// precio -> precio del producto
// rating -> calificacion del producto
// img -> imagen del producto
// click -> funcion que ejecuta el boton cuando es presionado
// unidades -> cantidad de unidades del producto
// id_card -> ID de la tarjeta
// id_boton -> ID del boton de la tarjeta
// bg -> color de fondo para el boton
// txt -> color para el texto
// msg -> texto para el boton

// ⚠️ Algunas props son opcionales

function CardPedido({producto, precio, rating, img, click, unidades,
  msg, bg, txt = '#1B1B1B', id_card, id_boton
}){
  return(
    <>
    {/* Desarrollo del componente */}
      <div className="card rounded-4" id={id_card}>
        <img src={img} className="card-img-top" alt={producto} id='t' />
        <div className="card-body" id='contenido'>
          <h5 className="text card-title" id='title'>{producto}</h5>
          {/* Componente que genera las estrellas que representan la calificacion
          del producto */}
          <Estrellas cantidad={rating} colorE={'#1B1B1B'} />
          <p className="card-text mb-0" id='price'>${precio}</p>
          <p className="card-text">{unidades}</p>
          <div className="support text-center" id='lugar-boton'>
            {/* Si el pedido se encuentra en su estado de confirmado se 
            muestra el boton para cancelar el pedido, pero si el pedido ya
            fue entregado se muestra el texto que confirma esta acción. */}
            {rating ? <Boton bg={bg} TextColor={txt} msg={msg}
              id={id_boton} FontSize={'1.2rem'} click={click}/> : 
              <p className='entregado'>PEDIDO ENTREGADO</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPedido;