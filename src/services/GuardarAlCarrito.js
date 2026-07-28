// Servicio que permite guardar productos en el carrito

// producto -> nombre del producto
// rating -> calificacion del producto
// precio -> precio del producto
// unidades -> cantidad de unidades del producto
// imagen -> imagen del producto
// id -> id del producto que se guarda.

function GuardarAlCarrito(producto, rating, precio, unidades, imagen, id){
  if(!localStorage.getItem('carrito')){
    // Si el almacen del carrito no existe se crea
    localStorage.setItem('carrito',JSON.stringify([]))
  }
  // Se convierte el almacen del carrito en formato JSON
  const listado = JSON.parse(localStorage.getItem('carrito'))
  // Se registra el nuevo producto dentro del listado
  listado.push({producto:producto, rating:rating, precio:+precio, unidades:unidades,img:imagen, id:id});
  // Guardo la nueva lista de productos que estan en el carrito en el localStorage.
  localStorage.setItem('carrito',JSON.stringify(listado))
  return
}

export default GuardarAlCarrito;