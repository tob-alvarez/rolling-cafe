import { Button } from "react-bootstrap";
import imgError from "../../assets/error404.png";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/inicio");
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex justify-content-center alignt-items-center">
        <img src={imgError} alt="imagen de error 404" className="img-fluid" />
      </div>
      <Button onClick={handleClick} className="btn m-3">
        Volver al inicio
      </Button>
    </div>
    </>
  );
};

export default Error404;
