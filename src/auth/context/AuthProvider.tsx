import { useReducer } from "react"
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { AuthAction, State, types } from "../types/types";

// Define el estado inicial para el contexto de autenticación
const initialstate: State = {
  logged: false,
}

// Función para inicializar el estado basado en la sesión guardada en el almacenamiento local
const init = (): State => {
  const savedState = localStorage.getItem('sesion');

  return ( savedState !== null ) ? JSON.parse( savedState ) : initialstate;   
}

// Componente AuthProvider que proporciona el contexto de autenticación a sus hijos
export const AuthProvider = ({children}: { children: JSX.Element[] | JSX.Element }) => {

  // Utiliza el authReducer y el estado inicial para gestionar el estado de autenticación
  const [ state, dispatch ] = useReducer( authReducer, initialstate, init );

  const login = ( name: string ) => {
    const user = { id: 'ABC', name };

    const action: AuthAction = {
      type: types.login,
      payload: { 
        id: 'ABC',
        name: name,
      }
    }

    localStorage.setItem('sesion', JSON.stringify( user ));

    dispatch( action );
  }

  const logout = () => {
    const action: AuthAction = {
      type: types.logout,
    }

    localStorage.removeItem('sesion');

    dispatch( action );
  } 

  // Renderiza el proveedor de contexto de autenticación con los valores de estado y dispatch
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
