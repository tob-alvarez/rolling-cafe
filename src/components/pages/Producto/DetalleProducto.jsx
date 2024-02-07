import { Col, Row } from "react-bootstrap";
import "./DetalleProducto.css";

function DetalleProducto() {
  return (
    <>
      <div className="container d-flex layoutHeight justify-content-between align-items-center">
        <Row>
          <Col md={6}>
            <img
              className="img-detalle"
              src="https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Col>
          <Col md={6}>
            <div>
              <h3>Capuchinex</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                dolore in commodi hic ratione repudiandae facilis ut,
                repellendus enim temporibus magnam praesentium veniam architecto
                autem?
              </p>
              <p>Categoria: Cafe</p>
              <p>Precio: Infinito</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DetalleProducto;
