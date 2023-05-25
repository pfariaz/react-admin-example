import * as React from "react";

export function useContext(context) {
    return React.useContext(context);
}

export const AuthProviderService = {
    isAuthenticated: false,
    signin(callback) {
        AuthProviderService.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        AuthProviderService.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};
  