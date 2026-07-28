import { useContext } from "react";
import { ProductosCarrito } from "./ProductosCarrito";

// Componente encargado de proveer contexto

function ObtenerCarrito({ children }){
  // Funcion encargada de obtener los productos del carrito de compras que se encuentran
  // almacenados en el localStorage
  const ObtenerData = () => {
    if(!localStorage.getItem('carrito')){
      // Redirigimos al usuario a la pantalla de no encontrado si no existen productos.
      return false
    }
    // Si existen productos los obtengo y retorno en formato JSON.
    const info = localStorage.getItem('carrito')
    return JSON.parse(info);
  };
  // Función para eliminar productos del carrito de compras, entra como parametro
  // el ID del producto que se desea eliminar del listado del carrito.
  const BorrarData = (id) => {
    // Obtengo los productos del carrito de compras que se encuentran en el localStorage
    // Y los convierto en formato JSON
    const dummy = localStorage.getItem('carrito');
    const data = JSON.parse(dummy)
    // Variable que guarda la posicion del producto a eliminar dentro del listado
    let posicionBorrar = 0
    // Recorro toda la lista del carrito de compras del usuario.
    for(let i=0;i<data.length;i++){
      // Si el ID del producto es el mismo que el ID que se desea eliminar, guardo
      // en la variable la posicion donde se encuentra y salgo el bucle for.
      if(data.at(i)['id'] === id){
        posicionBorrar = i;
        break
      }
    }
    // Elimino de la lista del carrito el producto deseado y actualizo el localStorage
    // con el nuevo listado del carrito de compras.
    data.splice(posicionBorrar,1)
    localStorage.setItem('carrito',JSON.stringify(data))
  }
  // Funcion para eliminar el carrito de compras cuando ya no hay mas productos.
  const ResetearCarrito = () => {
    // Obtengo los productos del carrito de compras
    const infoV2 = localStorage.getItem('carrito')
    // Si no hay productos dentro del listado, elimino del localStorage toda la
    // informacion relacionada con el carrito de compras.
    if(JSON.parse(infoV2).length <= 0){
      localStorage.removeItem('carrito')
      return
    }
  }
  // Funcion para obtener el precio del carrito de compras.
  const ObtenerPrecioCarrito = () => {
    // Obtengo los productos del carrito de compras del localStorage y los convierto
    // en formato JSON.
    const dummy = localStorage.getItem('carrito');
    const data = JSON.parse(dummy)
    // Variable que almacenara el precio total del carrito.
    let precioTotal = 0
    // Recorro todo el listado de productos en el carrito de compras.
    for(let i=0;i<data.length;i++){
      // Tomo el espacio donde se encuentra el precio del producto y lo sumo al 
      // contador del precio total del carrito de compras.
      precioTotal += data.at(i)['precio'] 
    };
    // Retorno el valor del carrito de compras redondeado a dos cifras decimales.
    return precioTotal.toFixed(2)
  }
  // Funcion que se encarga de llevar los productos del carrito a la seccion
  // de pedidos
  const PedidoHecho = () => {
    // Si no existe en el localStorage la llave 'pedidos' encargada de almacenar
    // los mismos, se crea en el localStorage.
    if(!localStorage.getItem('pedidos')){
      localStorage.setItem('pedidos',JSON.stringify([]))
    }
    // Obtengo el listado de pedidos del localStorage y los convierto a formato JSON.
    let Pedidos = localStorage.getItem('pedidos')
    Pedidos = JSON.parse(Pedidos);
    // Obtengo el listado de productos que se encuentran en el carrito de compras
    // y los convierto a formato JSON.
    let CarritoCompras = localStorage.getItem('carrito')
    CarritoCompras = JSON.parse(CarritoCompras); 
    // Recorro el listado de los productos en el carrito de compras y les agrego
    // a todos una nueva propiedad "estado" con el valor inicial de true.
    for(let n of CarritoCompras){
      n['estado'] = true;
    }
    // Guardo en una sola lista toda la informacion dentro del carrito de compras y
    // en los pedidos.
    Pedidos = [...CarritoCompras, ...Pedidos]
    // Almaceno en el localStorage en la llave donde se guardan los pedidos el nuevo
    // listado con los nuevos productos del carrito de compras que seran agregados.
    localStorage.setItem('pedidos',JSON.stringify(Pedidos));
    // Elimino del localStorage toda la informacion del carrito de compras.
    localStorage.removeItem('carrito');
  }

  return(
    // Este componente sera un proveedor de contexto y permitira acceder a todos 
    // los componentes a las funciones que se encuentran en la propiedad "value".
    <ProductosCarrito.Provider value={{ObtenerData, BorrarData,
     ResetearCarrito,ObtenerPrecioCarrito,PedidoHecho}}>
      { children }
    </ProductosCarrito.Provider>
  )
}

export default ObtenerCarrito;