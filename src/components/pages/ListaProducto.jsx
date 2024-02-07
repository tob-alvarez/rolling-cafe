/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";

const ListaProductos = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <CardProducto key={producto.id} producto={producto} />
      ))}
    </Row>
  );
};

export default ListaProductos;
