import './InicioSesion.css'
import Input from '../../components/Input/Input';
import Boton from '../../components/Boton/Boton';
import { useState } from 'react';
import { CrearContexto } from '../../context/CrearContexto';
import IniciarSesion from '../../services/EnviarCredenciales.js';
import Cargando from '../../components/Cargando/Cargando';
import { useNavigate } from 'react-router-dom';

// Pagina que muestra el formulario de inicio de sesion

function InicioSesion(){
  // Estado de React que se encargara de mostrar un mensaje de error dinamico.
  const [msgError, setMsgError] = useState(null)
  // Preparo una funcion para navegar por la aplicacion web.
  const navegar = useNavigate()
  // Funcion para enviar las credenciales del usuario a la API de DummyJSON para realizar
  // la respectiva autenticacion.
  const EnviarCredenciales = () =>{
    // Coloco en el mensaje de error una pantalla de carga mientras se validan los datos.
    setMsgError(<Cargando mb={'1rem'} />)
    // Obtengo el nombre de usuario y contraseña ingresados por el usuario.
    const nombre_usuario = document.getElementById('name').value
    const contraseña_usuario = document.getElementById('pass').value;
    // Variable que me permite guardar la respuesta de la API
    let estado;
    // Realizo el envio de las credenciales a la API
    const enviar = IniciarSesion(nombre_usuario,contraseña_usuario).then(ans =>{
      estado = ans
      // Si la API respondio con un error le indico al usuario un mensaje de error que
      // indica que las credenciales son incorrectas.
      if(!estado){
        setMsgError('Usuario o contraseña incorrectos')
        return
      }
      // Si las credenciales son correctas, se redirige al usuario a la ventana de /home
      navegar('/home');
    })
  }
  return(
    // Formulario de inicio de sesion
    <section className="container-md text-center" id='form-general'>
      <div className="row text-center">
        <div className="col" id='container-form'>
          {/* Titulo del formulario */}
          <h2 className='ftitle mt-4'>Iniciar sesión</h2>
        </div>
      </div>
      {/* Entrada de datos del usuario */}
      <div className="row text-center mt-3">
        <div className="col" id='container-form'>
          {/* Uso el componente que genera los inputs de formulario */}
          <Input type='text' placeholder='Nombre de usuario' min={1} max={30} id={'name'} />
          <Input type='password' placeholder='Contraseña' min={8} max={20} id={'pass'} />
        </div>
      </div>
      <p className='error' id='error'>{msgError}</p>
      <div className="row mb-4">
        <div className="col" id='container-form'>
          {/* Boton que se encarga de enviar las credenciales del usuario a la API
          cuando es presionado. */}
         <Boton TextColor={'#1B1B1B'} msg={'Iniciar sesión'} 
         bg={'#3E8EDE'} FontSize={'1.2rem'} id={'iniBTN'} click={EnviarCredenciales} />
        </div>
      </div>
    </section>
  )
}

export default InicioSesion;