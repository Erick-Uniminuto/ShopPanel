import './IconImg.css'
import { Link } from 'react-router-dom';

// Componente que genera iconos con una imagen y un color de fondo, completamente redondo

// icon -> icono que se colocara dentro del componente
// color -> color del icono
// bg -> color de fondo para el contenedor de la imagen
// to -> URL a donde se direccionara al usuario cuando interactue con el icono
// click -> funcion que ejecutara el icono cuando sea presionado
// top -> padding en el eje Y del componente
// side -> padding en el eje X del componente

// ⚠️ Solo se utilizan los props que se necesiten para reutilizar el componente

function IconImg({icon, color, bg, to, click, top = '.5rem', side = '1rem'}){
  return(
    // Desarrollo del componente
    <Link to={to} id='contorno' className='mb-2'>
      <i className={icon} id='ic' onClick={click}
      style={{color:color, backgroundColor:bg, paddingTop:top,
        paddingBottom:top,paddingLeft:side, paddingRight:side
      }}></i>
    </Link>
    // -----------------------------------------------------
  )
}

export default IconImg;