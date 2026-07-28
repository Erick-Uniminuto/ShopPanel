import Estrellas from "../Estrellas/Estrellas";
import './Reseña.css'

// Componente para generar los contenedores donde estan las reseñas de los usuarios

// nombre -> nombre del usuario que realiza la reseña
// calificacion -> calificacion que el usuario el da al producto
// comentario -> contenido textual de la reseña

function Reseña({nombre, calificacion, comentario}){
  // Desarrollo del componente
  return(
    <div className="outside-card">
      <div className="info-rese">
        <h4 className="mb-0" aria-label="nombre del usuario de la reseña">{nombre}</h4>
      </div>
      <div className="estrellitas">
        {/* Componente que genera las estrellas para mostrar la calificacion
        de la reseña al producto. */}
        <Estrellas cantidad={calificacion} />
      </div>
      <div className="estrellitas mt-2">
        <h6 aria-label="reseña del usuario">{comentario}</h6>
      </div>
    </div>
  )
}

export default Reseña;