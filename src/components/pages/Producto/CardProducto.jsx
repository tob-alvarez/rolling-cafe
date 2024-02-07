/* eslint-disable react/prop-types */
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './CardProducto.css'

const CardProducto = ({ producto }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${producto.id}`);
  };

  return (
    <Col md={4} lg={3}>
      <Card className="m-1">
        <img className="imgCard" src={producto.url} />
        <Card.Body>
          <Card.Title className="txt-verdecito">{producto.producto}</Card.Title>
          <Card.Text>
            {producto.descripcionBreve} <br />
          </Card.Text>
          <div className="d-flex justify-content-end flex-column">
            <b>Precio: ${producto.precio}</b>
            <Button variant="success" className="botonCard" onClick={handleClick}>
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
