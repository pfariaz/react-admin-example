import { useContext } from "../../services/auth";
import {
    useNavigate
  } from "react-router-dom";

function AuthStatus({ context }) {
    let auth = useContext(context);
    let navigate = useNavigate();
  
    if (!auth.user) {
      return <p>No estas logueado.</p>;
    }
  
    return (
      <p>
        Bienvenido {auth.user}!{" "}
        <button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Cerrar sesion
        </button>
      </p>
    );
  }

  export default AuthStatus;
