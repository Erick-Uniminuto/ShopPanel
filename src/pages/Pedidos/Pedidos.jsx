import { useContext, useEffect, useState } from "react";
import { ContextoPedidos } from "../../context/ContextoPedidos";
import { useNavigate } from 'react-router-dom' 
import CardPedido from "../../components/Pedidos/CardPedido";
import CardCancelado from "../../components/PedidoCancelado/CardCancelado";

// Pagina que se encarga de mostrar los pedidos del usuario

function Pedidos(){
  // Preparo una funcion para navegar por la aplicacion web.
  const navigate = useNavigate();
  // Utilizo el contexto para manipular los pedidos del usuario
  const {ObtenerPedidos,EstadoCancelado, EliminarPedido} = useContext(ContextoPedidos);
  // Creo un estado para obtener todos los pedidos realizados por el usuario
  const [pedidos, setPedidos] = useState([])
  // Funcion para obtener los pedidos del usuario
  const Pedidos = () => {
    const dummy = ObtenerPedidos();
    // Si no hay pedidos registrados el usuario es redirigido a una pestaña que indicara
    // que el mismo no cuenta con pedidos.
    if(!dummy){
      navigate('/nopedidos')
      return
    }
    // Si hay pedidos, se almacenan en un estado para cargarlos en la pagina
    setPedidos(dummy)
  }
  // Funcion para eliminar un pedido, entra como parametro el ID del producto
  // que se desea eliminar de la lista de pedidos.
  const PedidoCancelado = (productoID) => {
    EstadoCancelado(productoID);
    Pedidos();
    EliminarPedido(productoID)
  }
  // Cuando el componente se renderice por primera vez se ejecutara la funcion que 
  // se encuentra dentro del useEffect().
  useEffect(() => {
    Pedidos()
  },[])
  return(
    <section className="container-md">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Tus pedidos</h1>
        </div>
      </div>
      <div className="row">
        {/* Aqui coloco las tarjetas de los pedidos que se cargaran de forma dinamica
        dependiendo de la cantidad de pedidos que tenga el usuario. */}
        {pedidos.map((pro) => (
          // Si el pedido tiene como estado que se encuentra en espera se renderiza su
          // respectiva tarjeta, pero en caso de que el pedido ya se encuentre cancelado
          // se renderizara la tarjeta que muestra un pedido cancelado.
          pro.estado ? <div className="col" key={Math.floor(Math.random() * (1000 - 1 + 1))+1}>
            <CardPedido precio={pro.precio} img={pro.img}
             bg={'#DC3545'} msg={'Cancelar pedido'} txt="white" producto={pro.producto}
             rating={pro.rating} unidades={`${pro.unidades} unidades`}
             id_card={pro.id+1} id_boton={pro.id} click={() => {
              PedidoCancelado(pro.id)
              alert('Pedido cancelado con exito...')
             }} />
          </div> : 
          <div className="col" key={Math.floor(Math.random() * (1000 - 1 + 1))+1}>
            <CardCancelado img={pro.img} id_boton={pro.id} id_card={pro.id+=1} 
            precio={pro.precio} rating={pro.rating} producto={pro.producto} unidades={`${pro.unidades} unidades`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pedidos;