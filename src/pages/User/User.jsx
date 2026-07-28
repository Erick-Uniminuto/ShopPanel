import { useContext, useEffect, useState } from "react";
import { CrearContexto } from "../../context/CrearContexto";
import './User.css'
import BotonCompleto from "../../components/BotonCompleto/BotonCompleto";
import { useNavigate } from 'react-router-dom'

// Pagina que se encarga de mostrar informacion del perfil del usuario

function User(){
  // Preparo una funcion para navegar por la aplicacion web.
  const navigate = useNavigate();
  // Creo un estado que guardara la foto de perfil del usuario.
  const [foto, setFoto] = useState(0);
  // Valido que el usuario se encuentre con una sesion iniciada
  const ValidarLogin = () => {
    // Obtengo los datos de sesion del usuario
    const data = localStorage.getItem('user');
    // Si el usuario no tiene una foto de pefil se le coloca un por defecto
    if(!data){
      setFoto('https://cdn-icons-png.flaticon.com/512/709/709699.png');
      return
    }
    // Si el usuario tiene sesion convierto los datos obtenidos a JSON y coloco su
    // foto de perfil correspondiente.
    const info = JSON.parse(data)
    setFoto(info.img)
  }
  // Obtengo los datos de sesion del usuario y los convierto en JSON
  let informacion = localStorage.getItem('user');
  informacion = JSON.parse(informacion); 
  // Funcion para detectar el boton que presiono el usuario
  const BotonPresionado = (id) => {
    // Si se presiona el primero se direcciona a la seccion del carrito
    if(id === 1){
      navigate('/carrito')
      return
    // Si se presiona el segundo se redirige a la seccion de pedidos
    }else if(id === 2){
      navigate('/pedidos')
      return
    // Si se presiona el tercero se redirige a la pagina principal.
    }else{
      navigate('/home')
      return
    }
  }
  // Funcion que cierra la sesion del usuario
  const CerrarSesion = () => {
    // Cuando se presiona el boton de cerrar sesion se elimina la sesion del usuario
    // el carrito de compras y los pedidos realizados. Y se redirige al usuario
    // nuevamente al login, quitandole acceso a las rutas protegidas.
    localStorage.removeItem('pedidos');
    localStorage.removeItem('user');
    localStorage.removeItem('carrito');
    navigate('/login')
    return
  }
  // Cuando el componente se cargue por primera vez se ejecutara la funcion que se encuentra
  // dentro del useEffect().
  useEffect(() => {
    ValidarLogin()
  },[])
  return(
    <section className="container-md" id="user-c">
      <div className="row">
        <div className="col mt-4">
          <div className="user-border">
            {/* Se muestra la foto de perfil del usuario */}
            <img src={foto} alt="imagen de perfil del usuario" 
            id="ico"/>
          </div>
        </div>
      </div>
      {/* Informacion relacionada con el perfil del usuario */}
      <div className="row" id="user-container">
        <div className="col mt-4" id="user-info">
          <h3 className="cont">Nombre:{informacion.firstName}</h3>
        </div>
      </div>
      <div className="row" id="user-container">
        <div className="col" id="user-info">
          <h3 className="cont">Apellido:{informacion.lastName}</h3>
        </div>
      </div>
      <div className="row" id="user-container">
        <div className="col" id="user-info">
          <h3 className="cont">Correo:{informacion.email}</h3>
        </div>
      </div>
      <div className="row" id="user-container">
        {/* Aqui van los botones */}
        <div className="col mt-3" id="bgroup">
          <BotonCompleto ListaTextos={['Ir al carrito']} 
          fontsize={'1.3rem'} bg={'#3E8EDE'} id={1} click={() => {
            BotonPresionado(1)
          }}/>
          <BotonCompleto ListaTextos={['Tus pedidos']} 
          fontsize={'1.3rem'} bg={'#3E8EDE'} id={2} mt={'.5rem'} click={() => {
            BotonPresionado(2)
          }}/>
          <BotonCompleto ListaTextos={['Visitar productos']} 
          fontsize={'1.3rem'} bg={'#3E8EDE'} id={3} mt={'.5rem'} click={() => {
            BotonPresionado(3)
          }}/>
          <BotonCompleto ListaTextos={['Cerrar sesión']} 
          fontsize={'1.3rem'} bg={'#DC3545'} id={3} mt={'.5rem'}
          click={CerrarSesion}/>
        </div>
      </div>
    </section>
  )
}
export default User;