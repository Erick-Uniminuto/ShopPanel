// Componente que simula un apartado de carga

// mb -> margen inferior del componente
// id -> id para el componente
// mt -> margen superior del componente 

function Cargando({mb, id,mt}){
  return(
    // Desarrollo del componente que ayuda a simular una pantalla de carga
    <span className="spinner-border text-primary mb-0" role="status"
    style={{marginBottom:mb,marginTop:mt}} id={id}>
      <span className="visually-hidden">Loading...</span>
    </span>
    // ---------------------------------------------------------------------
  )
}

export default Cargando;