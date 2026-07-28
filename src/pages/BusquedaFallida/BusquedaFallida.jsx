import Boton from "../../components/Boton/Boton";

// Pagina que le presenta al usuario que un producto no pudo ser encontrado

function BusquedaFallida(){
  return(
    <section className="cotainer-md">
      <div className="row mt-3">
        <div className="col">
          <h1 className="important" id='t2'>Opss...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className='text-center' id='t3'>El producto que intentas buscar
            no existe.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col mt-2">
          {/* Componente que se encarga de generar un boton que redirige al
          usuario a pestaña de home donde se encuentran productos para visualizar. */}
          <Boton msg={'Volver al inicio'} bg={'#3E8EDE'} FontSize={'1.3rem'} 
          To="/home"/>
        </div>
      </div>
    </section>
  )
}

export default BusquedaFallida;
