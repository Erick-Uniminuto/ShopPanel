// Aqui hago la funcion para verificar el inicio de sesion haciendo una peticion
// a la API y guardar la informacion en el localstorage si todo salio bien

async function IniciarSesion(nombre, contraseña){
  // Endpoint para enviar credenciales de inicio de sesion a DummyJSON
  const peticion = await fetch('https://dummyjson.com/auth/login',{
    // Por medio del metodo POST envio la peticion a la API, ingresando el nombre de usuario
    // y contraseña que solicita la API para realizar la validacion de credenciales.
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      // Datos que se envian a la API
      username:nombre,
      password:contraseña,
      expiresInMins:60,
      // -----------------------------
    }),
    credentials:'include'
  });
  // Si la peticion no fue exitosa se retorna false
  if(peticion.status != 200){
    return false
  };
  // Se convierten los datos obtenidos al formato JSON
  const data = await peticion.json()
  // Almaceno cierta informacion de la respuesta de la API en un JSON personalizado
  const infoSesion = {
    token:data['accessToken'],
    name:data['username'],
    img:data['image'],
    firstName:data['firstName'],
    lastName:data['lastName'],
    email:data['email']
  }
  // Almaceno la informacion del JSON personalizado en el local storage
  localStorage.setItem('user',JSON.stringify(infoSesion))
  return true
}

export default IniciarSesion;