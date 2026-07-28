import { Link } from 'react-router-dom'
import './Footer.css'
import IconImg from '../IconImg/IconImg';

// Componente que conforma todo el footer de la pagina web

function Footer(){
  return(
    <footer className="container-fluid" id='footer'>
      <div className="row" id='row4'>
        <div className="col text-center">
          {/* Titulo del footer */}
          <h1 className="important mb-0 mt-4">
            Shoppanel
          </h1>
        </div>
      </div>
      {/* Listado de opciones dentro del footer */}
      <div className="row text-center">
        <div className="col mt-2">
          <Link to='/home' reloadDocument className='fLink'>Ver productos</Link>
        </div>
        <div className="col mt-2">
          <Link to='/login' reloadDocument className='fLink'>Iniciar sesión</Link>
        </div>
        <div className="col mt-2">
          <Link to='/home' reloadDocument className='fLink'>Pagina principal</Link>
        </div>
      </div>
      {/* Inicio de la seccion de contacto */}
      <div className="row mt-1">
        <div className="col text-center">
          <h1 className="important mt-4">
            Contactanos
          </h1>
        </div>
      </div>
      {/* Seccion con los iconos de las redes sociales utilizando
      el componente IconImg que permite generar estos iconos de forma rapida */}
      <div className="row mt-1" id='SocialSpace'>
        <div className="col px-1">
          <IconImg icon='bi bi-pinterest' color='white' bg='#1B1B1B'/>
        </div>
        <div className="col px-1">
          <IconImg icon='bi bi-linkedin' color='white' bg='#1B1B1B'/>
        </div>
        <div className="col px-1">
          <IconImg icon='bi bi-twitter-x' color='white' bg='#1B1B1B'/>
        </div>
        <div className="col px-1">
          <IconImg icon='bi bi-instagram' color='white' bg='#1B1B1B'/>
        </div>
        <div className="col px-1">
          <IconImg icon='bi bi-facebook' color='white' bg='#1B1B1B'/>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {/* Indicador de derechos de autor */}
          <h5 className="mt-2" id='copy'>
            Copyright@2026
          </h5>
        </div>
      </div>
       <div className="row">
        <div className="col text-center">
          {/* 🩷🩷🩷 */}
          <h5 className="mt-2 mb-4" id='copy'>
            Hecho con 🩷 por Erick
          </h5>
          {/* 🩷🩷🩷 */}
        </div>
      </div>
    </footer>
  )
}

export default Footer;