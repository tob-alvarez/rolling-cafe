import { Col, Row, Spinner } from "react-bootstrap";
import "./DetalleProducto.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    obtenerDetallesProducto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!producto) {
    return (
      <div className="layoutHeight d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container d-flex layoutHeight justify-content-between align-items-center">
      <Row>
        <Col md={6}>
          <img
            className="img-detalle mb-4"
            src={producto.url} 
            alt={producto.producto}  
          />
        </Col>
        <Col md={6}>
          <div className="text-center">
            <h3>{producto.producto}</h3>
            <p>{producto.descripcionAmplia}</p>
            <div className="d-flex gap-2 justify-content-center">
              <p className="spanVerde  m-0">Categoria:</p><p className="categoria m-0">{producto.categoria}</p>
            </div>
            <div className="d-flex gap-2 justify-content-center">
              <p className="spanVerde  m-0">Precio:</p><p className="precio m-0">${producto.precio}</p>
            </div>
            <button className="btn btn-primary mt-3" onClick={()=>{navigate("/home")}}>Volver</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetalleProducto;
