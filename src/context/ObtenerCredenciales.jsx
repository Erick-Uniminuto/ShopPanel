import { CrearContexto } from "./CrearContexto";
import { Navigate } from "react-router-dom";

// Contexto que me devuelve los datos de inicio de sesion en formato JSON

function ObtenerCredenciales({ children }){
  // Obtengo la informacion del usuario autenticado del localStorage
  const d = localStorage.getItem('user');
  // Convierto la informacion obtenida en el localStorage
  const informacion = JSON.parse(d);
  return(
    // Este componente sera un proveedor de contexto que le dara la capacidad a los
    // demas componentes de acceder a la variable que se encuentra en la propiedad "values".
    <CrearContexto.Provider value={{ informacion }}>
      { children }
    </CrearContexto.Provider>    
  )
}

export default ObtenerCredenciales;