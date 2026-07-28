// Aqui hago un generador de botones en columna y que ocupan todo el ancho

// Se reciben los siguientes props
// ListaTextos -> Listado de los textos que tendra cada uno de los botones
// click -> funcion que se ejcutara al presionar el boton
// bg -> color de fondo para el boton
// fontsize -> tamaño del texto para el boton
// id -> id del boton
// mt -> margen superior del boton

function BotonCompleto({ListaTextos, id, bg, fontsize, click, mt}){
  return(
    // Son botones que se generan de forma dinamica dependiendo de cuantos se
    // necesiten, el listado de textos indica la cantidad de botones que se deben
    // generar. Ya que cada texto pertenece a un boton.
    <div className="d-grid gap-2" style={{marginTop:mt}}>
      {ListaTextos.map((info) =>(
        <button key={id} onClick={click} className="btn btn-primary" type="button" id={id}
        style={{fontSize:fontsize, backgroundColor:bg}}>
        {info}</button>
      ))}
    </div>
  )
}

export default BotonCompleto;