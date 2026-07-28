import Boton from "../../components/Boton/Boton";

// Esta pagina le indica al usuario que no cuenta con productos en el carrito.

function SinCarrito(){
  return(
    <section className="cotainer-md">
      <div className="row mt-3">
        <div className="col">
          <h1 className="important" id='t2'>Opss...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className='text-center' id='t3'>Aún no cuentas con ningun producto
            en tu carrito, explora productos y agregalos al carrito, y asi podras
            verlos aqui para realizar tus pedidos.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col mt-2">
          {/* Se carga un boton que le permite al usuario redirigirse a la 
          pestaña principal cuando el usuario presione el boton. */}
          <Boton msg={'Volver al inicio'} bg={'#3E8EDE'} FontSize={'1.3rem'} 
          To="/home"/>
        </div>
      </div>
    </section>
  )
}

export default SinCarrito;