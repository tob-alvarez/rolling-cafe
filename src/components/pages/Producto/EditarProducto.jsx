import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditarProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
  
    useEffect(() => {
      const obtenerDetallesProducto = async () => {
        try {
          const response = await fetch(`http://localhost:3000/productos/${id}`);
          if (response.ok) {
            const data = await response.json();
            setProducto(data);
          } else {
            console.error('Error al obtener detalles del producto:', response.statusText);
          }
        } catch (error) {
          console.error('Error al obtener detalles del producto:', error);
        }
      };
  
      obtenerDetallesProducto();
    }, [id]);
  
    if (!producto) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h2>Editar Producto</h2>
        <div>
          <label>Nombre del Producto:</label>
          <input type="text" defaultValue={producto.producto} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" defaultValue={producto.precio} />
        </div>
        {/* Agrega más campos según la estructura de tu objeto producto */}
        <button>Guardar Cambios</button>
      </div>
    );
  };
  
  export default EditarProducto;
  
