import './PaginaNoEncontrada.css'

// Pagina que muestra al usuario que no se logro en contrar una pagina para cierta URL

function PaginaNoEncontrada(){
  return(
    <section className="cotainer-md">
      <div className="row mt-3">
        <div className="col">
          <h1 className="important" id='t2'>404</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className='text-center' id='t3'>Opss.. lo siento pero la pagina intentas buscar 
            no existe.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default PaginaNoEncontrada;