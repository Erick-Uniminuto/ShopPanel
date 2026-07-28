import Boton from "../../components/Boton/Boton";

// Pagina que mostrara al usuario que aun no cuenta con ningun pedido

function SinPedidos(){
  return(
    <section className="cotainer-md">
      <div className="row mt-3">
        <div className="col">
          <h1 className="important" id='t2'>Opss...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className='text-center' id='t3'>Aún no cuentas con ningun pedido,
            agrega productos al carrito y realiza tu pedido, aqui apareceran todos
            tus productos adquiridos.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col mt-2">
          {/* Boton que le permite al usuario moverse a la pestaña de home
          para que pueda conocer mas productos dentro de la aplicacion. */}
          <Boton msg={'Volver al inicio'} bg={'#3E8EDE'} FontSize={'1.3rem'} 
          To="/home"/>
        </div>
      </div>
    </section>
  )
}

export default SinPedidos;