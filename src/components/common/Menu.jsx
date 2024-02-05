import logo from '../../assets/Coffee_Logo.png'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Menu.css'

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className='d-flex justify-content-between container'>
        <img
          src={logo}
          alt="Logo de Rolling Coffee"
          className="img-fluid"
          width={150}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link>
            <Nav.Link href="#link">Registro</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;