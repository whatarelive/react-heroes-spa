// Importamos el hook useContext de react para acceder al contexto de autenticación
import { useContext } from "react";
// Importamos el contexto de autenticación
import { AuthContext } from "../auth/context/AuthContext";
// Importamos el componente Navigate de react-router para redireccionar a una ruta específica
import { Navigate } from "react-router";



// Definimos el componente PublicRouter que recibe un prop children de tipo JSX.Element o JSX.Element[]
export const PublicRouter = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  
  // Obtenemos el estado del contexto de autenticación
  const { state } = useContext(AuthContext);
  
  // Si el usuario no está autenticado, mostramos los hijos del componente
  // Si el usuario está autenticado, redireccionamos a la ruta '/login'
  return (!state.logged) ? children : <Navigate to={'/login'}/>;
}
