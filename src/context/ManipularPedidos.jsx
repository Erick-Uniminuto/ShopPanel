import { useContext } from "react";
import { ContextoPedidos } from "./ContextoPedidos";

// Componente que se encargara de entregar un contexto a los demas

function ManipularPedidos({ children }){
  // Funcion para obtener los pedidos del usuario con la sesion activa
  const ObtenerPedidos = () => {
    if(!localStorage.getItem('pedidos')){
      // Si no existen pedidos se redirige al usuario a la pestaña de no encontrado
      return false
    }
    // Toma los pedidos existentes y los retorna en formato JSON
    const data = localStorage.getItem('pedidos')
    return JSON.parse(data)
  }
  // Funcion para cambiar el estado de un pedido a cancelado, pasando como parametro
  // el ID del producto del cual se quiere cambiar su estado dentro de los pedidos.
  const EstadoCancelado = (productoID) => {
    // Se recuperan todos los pedidos que se encuentran almacenados en el localStorage
    let data = localStorage.getItem('pedidos')
    // Convierto los datos obtenidos a formato JSON
    data = JSON.parse(data)
    // Se recorren todos los pedidos
    for(let i of data){
      // Si el ID del pedido es el seleccionado y su estado es true, se cambia false el 
      // estado y se sale del bucle for.
      if(i.id === productoID && i.estado === true){
        i.estado = false;
        break
      };
    }
    // Recorremos nuevamente los pedidos del usuario
    for(let k=0;k<data.length;k++){
      // Si el pedido tiene como estado true, se cambia su Rating a false
      // y salimos del bucle for.
      if(data.at(k)['estado'] === true){
        data.at(k)['rating'] = false;
        break
      }
    }
    // Se guardan los pedidos con las propiedades actualizadas en el localStorage
    localStorage.setItem('pedidos',JSON.stringify(data));
  }
  // Funcion para eliminar un pedido cancelado pasando como parametro el ID
  // del producto que vamos a eliminar y que se encuentra dentro de los pedidos.
  const EliminarPedido = (productoID) => {
    // Recupero los pedidos del localStorage y los convierto a formato JSON
    const data = localStorage.getItem('pedidos');
    const infoNueva = JSON.parse(data)
    // Recorro todos los pedidos del usuario
    for(let i=0;i<infoNueva.length;i++){
      // Si el pedido se encuentra cancelado "con estado false", se elimina de la 
      // lista de pedidos del usuario.
      if(infoNueva.at(i)['estado'] === false){
        infoNueva.splice(i,1)
      }
    }
    // Si el listado que contiene los pedidos del usuario que da vacia, se eliminara
    // del localStorage la llave encargada de almacenar los pedidos del usuario.
    if(infoNueva.length === 0){
      localStorage.removeItem('pedidos');
      return
    }
    // Si todavia existen pedidos se guardan los cambios en el localStorage.
    localStorage.setItem('pedidos',JSON.stringify(infoNueva));
  }

  return(
    // Este componente sera un proveedor de contexto que le dara a los demas componentes
    // la capacidad de utilizar las funciones que se encuentran en la propiedad "value".
    <ContextoPedidos.Provider value={{ObtenerPedidos, EstadoCancelado, EliminarPedido}}>
      { children }
    </ContextoPedidos.Provider>
  )
}

export default ManipularPedidos;