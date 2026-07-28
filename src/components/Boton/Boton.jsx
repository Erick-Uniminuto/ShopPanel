import './Boton.css'
import { Link } from 'react-router-dom'

// Componente que se encargara de renderizar un boton
// El boton recibe props como:
// msg -> texto del boton
// click -> funcion que se ejcutara al presionar el boton
// TextColor -> color del texto
// bg -> color de fondo para el boton
// FontSize -> tamaño del texto para el boton
// id -> id del boton
// value -> valor por defecto del boton cuando es presionado
// To -> URL a la cual el boton redirigira al usuario cuando lo presione

function Boton({msg, click,TextColor,bg,FontSize, id, value, To='#'}){
  return(
    // Construccion del componente
   <Link className="btn btn-danger" id={id} value={value} to={To}
   onClick={click} role='button'
   style={{color:TextColor, backgroundColor:bg, fontSize:FontSize}}>
    {msg}
   </Link>
  //  ---------------------------------------------------------------------
  )
}

export default Boton;