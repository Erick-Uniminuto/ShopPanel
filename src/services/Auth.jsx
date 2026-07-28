import { Navigate, Outlet } from "react-router-dom";

// Componente que permite proteger rutas que requieren que el usuario este
// autenticado para acceder a ciertas paginas.

function Auth(){
  // Si no existe informacion del usuario en lo localStorage que indica que realizo
  // un inicio de sesion exitoso se redirige a la pagina de login
  if(!localStorage.getItem('user')){
    return <Navigate to={'/login'}/>
  }
  // En caso de si existir se redirige a la pagina correspondiente
  return <Outlet/>
}

export default Auth;