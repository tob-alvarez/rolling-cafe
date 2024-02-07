import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {  useNavigate } from 'react-router-dom';
import './Administrador.css'

const Administrador = () => {

  const [productos, setProductos] = useState([]);
  const navigate = useNavigate()

  const handleDelete = (id) => {
    // Lógica para eliminar el producto con el ID proporcionado
    console.log(`Eliminar producto con ID: ${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/editProduct/${id}`);
  };
  const handleClick =()=>{
    navigate('/newProduct')
  }
  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:3000/productos');
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
        console.log(productos)
      } else {
        console.error('Error al obtener productos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };
  
  useEffect(() => {
    obtenerProductos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3">
        <h2>Productos Disponibles</h2>
        <button className="btn btn-success" onClick={handleClick}>+</button>
      </div>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de la imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.producto}</td>
                <td>${producto.precio}</td>
                <td>
                  <div className="middle-item">
                    <img
                      className="img-fluid img-table"
                      src={producto.url}
                      alt={producto.producto}
                    />
                  </div>
                </td>
                <td>{producto.categoria}</td>
                <td>
                  <div className='d-flex justify-content-center gap-2'>
                    <button onClick={() => handleEdit(producto.id)} className="btn btn-success">Editar</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(producto.id)}>Borrar</button>
                  </div>
                </td>
              </tr>
            ))}
            <tr>
              <td>0</td>
              <td>Larry the Bird</td>
              <td>Priceless</td>
              <td>@twitter</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Administrador;
