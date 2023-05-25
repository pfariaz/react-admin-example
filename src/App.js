import React, {useState} from 'react';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Layout from "./components/Layout";
import RequireAuth from './components/Auth/RequireAuth';
import AuthProvider from './components/Auth/AuthProvider';
import {
  Routes,
  Route
} from "react-router-dom";

const AuthContext = React.createContext(null);

export default function App() {
  const [title, updateTitle] = useState(null);
  return (
    <AuthProvider AuthContext={AuthContext}>
      <Header title={title}/>
      <Routes>
        <Route element={<Layout context={AuthContext} />}>
          <Route path="/" element={<LoginForm context={AuthContext} updateTitle={updateTitle} />} />
          <Route path="/login" element={<LoginForm context={AuthContext} updateTitle={updateTitle} />} />
          <Route
            path="/home"
            element={
              <RequireAuth context={AuthContext}>
                <Home />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
