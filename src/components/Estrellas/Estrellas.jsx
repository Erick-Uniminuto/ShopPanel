// Componente que se encarga de generar estrellas dentro de un contenedor

// cantidad -> indica la cantidad de estrellas que se desean generar
// colorE -> es el color que tendra cada una de las estrellas generadas
// size -> es el tamaño de las estrellas

function Estrellas({cantidad, colorE, size}){
  // Listado donde se almacenaran las estrellas generadas
  let estrellas = [];
  for(let i=0;i<cantidad;i++){
    // Con el bucle for genero la cantidad de estrellas solicitida colocandolas dentro
    // del listado.
    estrellas.push(<i className="bi bi-star-fill" id="star" style={{color:colorE,fontSize:size}} key={i}></i>)
  }
  return(
    // Una vez tenga las estrellas generadas cargo la lista que las almacena y asi
    // React logra cargar el contenedor con todas las estrellas.
    <div className="stars">
      {estrellas}
    </div>
  )
}

export default Estrellas;