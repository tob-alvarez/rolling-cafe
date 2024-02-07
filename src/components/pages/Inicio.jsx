import "./Inicio.css";
import banner from "../../assets/banner.png";
import { Row } from "react-bootstrap";
import CardProducto from '../pages/Producto/CardProducto'

const Inicio = () => {
  return (
    <>
      <section className="inicio">
        <img src={banner} alt="" className="imagen-banner" />
      </section>
      <section className="container mb-5">
      <h2 className="display-3 mt-2">Nuestros productos</h2>
        <hr />
        <Row className="justify-content-around">
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </section>
    </>
  );
};

export default Inicio;
