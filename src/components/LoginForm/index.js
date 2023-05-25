import React from 'react';
import {
    useNavigate,
    useLocation
  } from "react-router-dom";
import { useContext } from '../../services/auth';

function LoginForm(props) {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useContext(props.context);
  
    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username");
      let password = formData.get("password");
  
      auth.signin(username, password, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        props.updateTitle("Home")
        navigate(from, { replace: true });
      });
    }
  
    return (
      <div>
        <p>Debe iniciar sesión para ver la página en {from}</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Usuario: <input name="username" type="text" />
          </label>{" "}
          <label>
            Password: <input name="password" type="password" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LoginForm;
