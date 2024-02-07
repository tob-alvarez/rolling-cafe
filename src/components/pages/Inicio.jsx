import  { useState, useEffect } from 'react';
import "./Inicio.css";
import { Row } from "react-bootstrap";
import ListaProductos from './ListaProducto';

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:3000/productos');
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
      } else {
        console.error('Error al obtener productos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <section className="inicio">
        <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagen-banner" />
      </section>
      <section className="container mb-5">
        <h2 className="display-3 mt-2">Nuestros productos</h2>
        <hr />
        <Row className="justify-content-around">
          <ListaProductos productos={productos} />
        </Row>
      </section>
    </>
  );
};

export default Inicio;
