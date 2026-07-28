import { useContext, useEffect, useState } from "react";
import { ProductosCarrito } from "../../context/ProductosCarrito";
import { useNavigate } from 'react-router-dom';
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import './Carrito.css'
import Boton from "../../components/Boton/Boton";

// Pagina que se encarga de mostrar el carrito de compras.

function Carrito(){
  // Preparo una funcion para navegar por toda la aplicacion web.
  const navigate = useNavigate();
  // Utilizo el contexto que me permite interactuar con todos los productos que 
  // el usuario a guardado en el carrito de compras.
  const {ObtenerData, BorrarData,ResetearCarrito, ObtenerPrecioCarrito,
    PedidoHecho} = useContext(ProductosCarrito);
  // Creo un estado que almacenara en una lista todos los productos encontrados
  // en el carrito
  const [informacion, setInformacion] = useState([]);
  // Estado que almacenara el precio total del carrito
  const [precio,setPrecio] = useState(0);
  // Estado que servira como switch para eliminar productos que el usuario
  // saca del carrito en tiempo real.
  const [cambio, setCambio] = useState(false);
  // Funcion para obtener el ID del producto que se desea eliminar
  const ObtenerID = (id) => {
    BorrarData(id)
    // Si el switch se encuentra en false se cambia a true, se actualiza el carrito
    // para mostrar al usuario los cambios realizados y volvemos a obtener informacion
    // del carrito.
    if(!cambio){
      setCambio(true)
      ResetearCarrito()
      obtenerInfo()
      return
    }
    // Si el switch esta en true se cambia a false, se actualiza el carrito con
    // los cambios realizados y se vuelve a obtener la informacion del carrito.
    setCambio(false)
    ResetearCarrito()
    obtenerInfo()
  }
  // Funcion para obtener los productos que el usuario tiene en su carrito.
  const obtenerInfo = () => {
    const dummy = ObtenerData()
    // Si el usuario no tiene productos se redirige a una pestaña que indica que 
    // su carrito se encuentra vacio.
    if(!dummy){
      navigate('/sincarrito')
      return
    }
    // Se cargan los productos y se calcula el precio total del carrito
    let PrecioTemporal = ObtenerPrecioCarrito();
    setInformacion(dummy)
    setPrecio(PrecioTemporal)
  }
  // La funcion que se encuentra dentro del useEffect se ejecutara cuando el componente
  // se renderice por primera vez.
  useEffect(()=>{
    obtenerInfo()
  },[])

  // La funcion que se encuentra dentro del useEffect se ejecutara cuando la variable
  // "cambio" tenga alguna mutacion en su valor.
  useEffect(() => {
    obtenerInfo()
  },[cambio])

  return(
    <section className="carrito">
      <div className="row">
        <div className="col mt-3">
          <h1>Carrito</h1>
        </div>
      </div>
      <div className="row">
        {/* Se crean tantas tarjetas como productos tenga el usuarioen su carrito de compras */}
        {informacion.map((pro) => (
          <div className="col mt-3" key={Math.floor(Math.random() * (1000 - 1 + 1))+1}>
            {/* Componente tarjeta que se encarga de mostrar los productos del carrito
            del usuario. */}
            <Tarjeta img={pro.img} precio={pro.precio} producto={pro.producto}
            rating={pro.rating} unidades={`${pro.unidades} unidades`} msg="Eliminar del carrito"
            bg="#DC3545" txt="#FEFEFA" id={pro.id} click={() => {
              // Si el boton de la tarjeta se presiona se elimina del carrito
              // y notifica al usuario por medio de una tarjeta.
              ObtenerID(pro.id)
              alert('Producto eliminado del carrito...')
            }}/>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col mt-5">
          {/* Se muestra el precio del carrito al usuario */}
          <h1 aria-label="valor del carrito en total">Total: ${precio}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col mt-1 mb-3">
          {/* Componente que genera un boton para que el usuario pueda realizar
          un pedido con todos los productos que se encuentran en el carrito. */}
          <Boton msg={'Realizar pedido'} bg={'#3E8EDE'} id={'pedir'} TextColor={'#1B1B1B'} 
          FontSize={'1.4rem'} To="/pedidos" click={() => {
            // Cuando se haga click sobre el boton se realizara el pedido con los 
            // productos que el usuario tenga en el carrito.
            PedidoHecho()
          }}/>
        </div>
      </div>
    </section>
  )
}

export default Carrito;