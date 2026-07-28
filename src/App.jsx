import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import InicioSesion from './pages/InicioSesion/InicioSesion';
import Ejemplo from './context/ObtenerCredenciales';
import ObtenerCredenciales from './context/ObtenerCredenciales';
import Home from './pages/Home/Home';
import DetallesProducto from './pages/DetallesProducto/DetallesProducto';
import CantidadProductos from './context/CantidadProducto';
import Carrito from './pages/Carrito/Carrito';
import ObtenerCarrito from './context/ObtenerCarrito';
import Pedidos from './pages/Pedidos/Pedidos';
import ManipularPedidos from './context/ManipularPedidos';
import Busqueda from './pages/Busqueda/Busqueda';
import User from './pages/User/User';
import Auth from './services/Auth';
import PaginaNoEncontrada from './pages/ProductoNoEncontrado/PaginaNoEncontrada';
import BusquedaFallida from './pages/BusquedaFallida/BusquedaFallida';
import SinPedidos from './pages/SinPedidos/SinPedidos';
import SinCarrito from './pages/SinCarrito/SinCarrito';

function App(){
  return(
    // Contextos
    <ManipularPedidos>
      <ObtenerCarrito>
        <CantidadProductos>
          <ObtenerCredenciales>
    {/* ---------------------------------------- */}
            <BrowserRouter>
              <div className='apoyo'>
                {/* Barra de navegacion presente en todas las rutas */}
                <Navbar />
                {/* Contendor principal de todas las paginas */}
                <main className="container-md">
                  <Routes>                
                    {/* Rutas publicas */}
                    <Route path='/login' element={<InicioSesion />} />
                    <Route path='/' element={<InicioSesion />} />
                    <Route path='/*' element={<PaginaNoEncontrada/>} />
                    {/* ------------------------------------------------- */}
                    {/* Rutas protegidas */}
                    <Route element={<Auth />}>
                      <Route path='/home' element={<Home />} />
                      <Route path='/producto/:id' element={<DetallesProducto/>} /> {/* dinamica */}
                      <Route path='/carrito' element={<Carrito/>} />
                      <Route path='/pedidos' element={<Pedidos />} />
                      <Route path='/buscar/:producto' element={<Busqueda />} /> {/* dinamica */}
                      <Route path='/user' element={<User />} />
                      <Route path='/fallo' element={<BusquedaFallida />} />
                      <Route path='/nopedidos' element={<SinPedidos />} />
                      <Route path='/sincarrito' element={<SinCarrito />} />
                    </Route>
                    {/* --------------------------------------------------- */}
                  </Routes>
                </main>
                {/* Footer presente en todas las rutas */}
                <Footer/>
              </div>
            </BrowserRouter>
          </ObtenerCredenciales>
        </CantidadProductos>
      </ObtenerCarrito>
    </ManipularPedidos>
  )
}

export default App;