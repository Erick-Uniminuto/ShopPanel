// Realizar una peticion a la API para realizar la busqueda de un producto por
// su nombre.

async function RealizarBusqueda(producto){
  // Endpoint de la API que me permite buscar productos por nombre o palabra clave
  const URL = `https://dummyjson.com/products/search?q=${producto}`;
  // Realizo la peticion a la API por medio del metodo GET
  let getData = await fetch(URL)
  // De la informacion obtenida la convierto en formato JSON
  getData = await getData.json()
  // Si no se encuentran productos se retornara false
  if(getData.products.length <= 0){
    return false
  }
  // En caso de encontrar productos se retornara esa informacion
  return getData
}

export default RealizarBusqueda;