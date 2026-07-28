// Funcion para obtener informacion de productos

async function PedirProductos(){
  // Realizo una peticion a la API de DummyJSON para obtener informacion de 
  // 50 productos gracias al limite impuesto en la URL.
  const getData = await fetch('https://dummyjson.com/products?limit=50');
  // Una vez obtenidos los productos convierto la informacion obtenida en un JSON
  const data = await getData.json();
  // De la informacion obtenida unicamente retorno la que tiene que ver con los productos
  return data.products 
}

export default PedirProductos;