import logo from '../../assets/Coffee_Logo.png'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Menu.css'
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {

  const handleClick = () =>{
    const navbar = document.getElementById('basic-navbar-nav');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }
  const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className='d-flex justify-content-between container'>
        <img
          src={logo}
          alt="Logo de Rolling Coffee"
          className="img-fluid"
          width={150}
          onClick={()=> navigate('/home')}
          style={{cursor: 'pointer'}}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='text-center'>
            <Link to="/home" className="mx-3 my-1 links" onClick={handleClick}>Home</Link>
            <Link to="/admin" className="mx-3 my-1 links" onClick={handleClick}>Admin</Link>
            <Link to="/registro" className="mx-3 my-1 links" onClick={handleClick}>Registro</Link>
            <Link to="/login" className="mx-3 my-1 links" onClick={handleClick}>Login</Link>
          </Nav>
        </Navbar.Collapse> 
      </div>
    </Navbar>
  );
};

export default Menu;