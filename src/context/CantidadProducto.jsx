import { useState } from "react";
import { CantidadContexto } from "./CantidadContexto";

// Contexto para interactuar con el boton para definir la cantidad de productos
// que se almacenaran en el carrito

function CantidadProductos({ children }){
  // Estado de React que mantiene almacenado el valor del contador, el estado
  // permite que el contador cambie sin la necesidad de recargar la pagina.
  const [cantidad, setCantidad] = useState(1);
  // Funcion para aumentar el valor del contador
  const aumentar = () => {
    // Si el contador llega a 10 no aumentara mas
    if(cantidad >= 10){
      setCantidad(10)
      return
    };
    // En caso de ser menor de 10 aumentara en 1
    setCantidad(cantidad => cantidad + 1);
  }
  // Funcion para disminuir el valor del contador
  const disminuir = () => {
    // Si el contador es menor a 1 dejara de disminuir su valor
    if(cantidad <= 1){
      setCantidad(1)
      return
    };
    // Si el contador es mayor a 1 disminuira en 1 su valor
    setCantidad(cantidad => cantidad - 1);
  }
  // Funcion para resetar el valor del contador a 1
  const resetear = () => {
    setCantidad(cantidad => 1);
  }
  return(
    // Este componente se encargara de entregar a otros componentes este contexto
    // y que asi puedan acceder y usar las funciones o variables que se encuentran
    // dentro de la propiedad "value".
    <CantidadContexto.Provider value={{cantidad, aumentar, disminuir, resetear}}>
      { children }
    </CantidadContexto.Provider>
  )
}

export default CantidadProductos;