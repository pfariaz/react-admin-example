import React from 'react';
import { AuthProviderService } from '../../services/auth';

function AuthProvider({ AuthContext, children }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, password, callback) => {
        return AuthProviderService.signin(() => {
        setUser(newUser);
        callback();
        });
    };

    let signout = (callback) => {
        return AuthProviderService.signout(() => {
        setUser(null);
        callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider
