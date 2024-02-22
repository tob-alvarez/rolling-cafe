import { useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/usuarios");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const findUser = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  const onSubmit = async (data) => {
    const user = findUser(data.email, data.password);

    if (user) {
      console.log("Inicio de sesión exitoso");
      navigate("/home");
      setLoginError("");
    } else {
      console.log("Credenciales incorrectas");
      setLoginError("Credenciales incorrectas");
    }
  };

  return (
    <>
      <div className="layoutHeight d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column justify-content-center borderRounded">
          <h2>Login</h2>
          <hr />
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span>
              <b>Email</b>
            </span>
            <input
              type="text"
              className="inputLogin"
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingresa una dirección de correo electrónico válida",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
            <span>
              <b>Contraseña</b>
            </span>
            <input
              type="password"
              className="inputLogin"
              {...register("password", {
                required: "Este campo es requerido",
              })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
            {loginError && <span className="error">{loginError}</span>}
            <button className="btn btn-primary mt-4" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
