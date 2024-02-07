import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardProducto = () => {

  const navigate = useNavigate()
  const handleClick= () =>{
    navigate('/producto')
  }
  
  return (
    <Col md={4} lg={3}>
      <Card className="m-1">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title className="txt-verdecito">Titulo</Card.Title>
          <Card.Text>
            Caracteristicas del producto <br />
            <b>Precio: $150</b>
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="success" onClick={handleClick}>Ver mas</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
