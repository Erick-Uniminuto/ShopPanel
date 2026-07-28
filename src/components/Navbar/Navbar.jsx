import { Link } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useState } from 'react';

// Componente que pintara la barra de navegacion de la aplicacion

function Navbar(){
  // Estado de React que almacenara el enlace de la foto de perfil del usuario
  // que haya iniciado sesion para mostrarla en la navbar
  const [foto, setFoto] = useState(0);
  // Funcion para validar si hay un usuario con sesion activa
  const ValidarLogin = () => {
    const data = localStorage.getItem('user');
    // Si no hay sesion se coloca una imagen por defecto al usuario
    if(!data){
      setFoto('https://cdn-icons-png.flaticon.com/512/709/709699.png');
      return
    }
    // Si hay sesion se coloca la foto de perfil del usuario en el navbar
    const info = JSON.parse(data)
    setFoto(info.img)
  }
  // Funcion para realizar la busqueda de productos
  const RealizarBusqueda = () => {
    // Obtengo el input del usuario en la barra de busqueda
    const contenido = document.getElementById('c');
    // Redireccionar al usuario al enlace que realiza la busqueda de productos
    window.location.href = `/buscar/${contenido.value}`
    return
  }
  // Esta funcion se ejecuta apenas se pinte la navbar en cualquier apartado de la
  // aplicacion web.
  useEffect(() => {
    ValidarLogin()
  },[])
  return(
    // Barra de navegacion
    <nav className="navbar navbar-expand-md">
      <div className="container-lg" id='general'>
        <div className="support d-flex justify-content-center align-items-center">
          {/* Nombre de la organizacion en la Navbar */}
          <Link className='navbar-brand' to='/home'>
            <h1 className='important mb-0' id='t1'>ShopPanel</h1>
          </Link>
          {/* Barra de busqueda */}
          <form className='d-flex' role='search' id='sBar'>
            <input type="search" className='form-control me-2'
            placeholder='Buscar producto...' aria-label='Barra de busqueda'
            id='c'/>
            <button
              className='btn btn-danger d-flex justify-content-center align-items-center'
              type='button' id='b' onClick={RealizarBusqueda}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* Boton para el menu hamburguesa */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id='toggler'>
          <i className="menu bi-list"></i>
        </button>
        {/* Opciones del menu hamburguesa */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link className="nav-link" to="/home" id='option'>
                Productos
              </Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/pedidos" id='option'>
                Tus pedidos
              </Link>
            </li> 
            {/* Opcion para ir al carrito de compras */}
            <li className='nav-item'>
              <Link className="nav-link" to={'/carrito'}>
                <i className="bi bi-cart4" id='car-icon'></i>
              </Link>
            </li> 
            {/* Foto de perfil del usuario */}
            <li className='nav-item'>
              <Link className="nav-link" id='u-icon' to={'/user'}>
                <img src={foto} alt="foto usuario" id="user" />
              </Link>
            </li>
            {/* Barra de busqueda para el menu hamburguesa */}
            <li className='nav-link'>
              <form className='d-flex' role='search' id='sBar2'>
                <input type="search" className='form-control me-2'
                placeholder='Buscar producto...' aria-label='Barra de busqueda'/>
                <button
                  className='btn btn-danger d-flex justify-content-center align-items-center'
                  type='button' id='b'>
                  <i className="bi2 bi-search"></i>
                </button>
              </form> 
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  )  }

export default Navbar;


// Por defecto la pantalla de no encontrado muestra que el producto no fue encontrado