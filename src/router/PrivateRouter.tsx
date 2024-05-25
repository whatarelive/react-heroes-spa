// Importamos el hook useContext de react para acceder al contexto de autenticación
import { useContext } from "react"
// Importamos el contexto de autenticación
import { AuthContext } from "../auth/context/AuthContext"
// Importamos el componente Navigate de react-router para redireccionar a una ruta específica
import { Navigate, useLocation } from "react-router";


/**
 * Componente de enrutador privado.
 * 
 * Si el usuario ha iniciado sesión, renderiza los componentes hijos.
 * Si el usuario no ha iniciado sesión, redirige a la página de inicio de sesión.
 * 
 * @param children Los componentes hijos a renderizar.
 */
export const PrivateRouter = ({ children }: { children: JSX.Element | JSX.Element[] } ) => {

  // Obtener el estado de autenticación desde el AuthContext
  const { state } = useContext( AuthContext );

  // Obtener la ubicación actual
  const { pathname, search } = useLocation();

  // Guardar la última ruta visitada en el almacenamiento local
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  // Render the children components if the user is logged in
  // Otherwise, redirect to the login page
  return ( state.logged ) ? children : <Navigate to={'/login'} />;
}
