async function ObtenerDetallesProducto(id){
  // Enlace para solicitar detalles del producto seleccionado por el usuario
  const URL = `https://dummyjson.com/products/${id}`;
  // Realizo la peticion a la URL para obtener los detalles del producto
  const peticion = await fetch(URL)
  // Si la peticion no fue satisfactoria no se devuelven datos
  if(peticion.status != 200){
    return null
  }
  // Convierto los datos obtenidos a un JSON
  const datos = await peticion.json()
  // Retorno los datos transformados
  return datos 
}

export default ObtenerDetallesProducto;



