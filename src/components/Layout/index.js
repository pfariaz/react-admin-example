import React from 'react';
import {
    Link,
    Outlet,
  } from "react-router-dom";
import AuthStatus from '../Auth/AuthStatus';

function Layout(props) {
    return(
        <div>
        <AuthStatus context={props.context} />
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/home">Home portal</Link>
          </li>
        </ul>
  
        <Outlet />
      </div>
    )
}

export default Layout;
