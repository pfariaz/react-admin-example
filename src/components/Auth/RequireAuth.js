import {
    useLocation,
    Navigate,
  } from "react-router-dom";
import { useContext } from "../../services/auth";

function RequireAuth({ context, children }) {
    let auth = useContext(context);
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth
