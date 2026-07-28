// Servicio que permite calcular el rating de un producto por medio de un promedio

// ratings -> listado de las calificaciones del producto

function ObtenerRatings(ratings){
  // Contador que almacena la suma de las calificaciones del producto
  let counter = 0
  for(let rating of ratings){
    // Se suman al contador cada uno de los ratings del producto
    counter += rating['rating']
  }
  // El contador ahora almacena la division de la suma de todas las reseñas entre 
  // la cantidad de las mismas y elimina los decimales.
  counter = Math.round(counter/ratings.length)
  return counter
}

export default ObtenerRatings;