import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { LoginCard } from '../components/LoginCard';


// Definimos el componente LoginPage:
export const LoginPage = () => {

  // Obtenemos la función navigate de useNavigate para cambiar de ruta:
  const navigate = useNavigate();

  // Obtenemos la función login del contexto de autenticación:
  const { login } = useContext( AuthContext );

  // Definimos la función que se ejecutará al hacer click en el botón de login:
  const onLogin = ( name: string ) => {
    // Llamamos a la función login con el nombre de usuario:
    login( name );

    // Obtenemos la última ruta visitada del almacenamiento local o usamos '/' si no hay ninguna:
    const lastPath = localStorage.getItem('lastPath') || '/';

    // Navegamos a la última ruta visitada:
    navigate(lastPath, { replace: true });
  }

  // Renderizamos el componente:
  return (
    <div className="container mt-5">     
      <LoginCard onLogin={ onLogin }/>      
    </div>
  )
}
