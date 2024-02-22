import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Inicio from './components/pages/Inicio'
import Layout from './components/common/Layout';
import Error404 from './components/pages/Error404';
import Administrador from './components/pages/Administrador';
import DetalleProducto from './components/pages/Producto/DetalleProducto';
import NuevoProducto from './components/pages/Producto/NuevoProducto';
import EditarProducto from './components/pages/Producto/EditarProducto';
import Login from './components/pages/Login/Login';

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/*" element={<Inicio />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/newProduct" element={<NuevoProducto />} />
            <Route path="/editProduct/:id" element={<EditarProducto />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App  