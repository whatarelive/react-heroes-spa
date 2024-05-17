import { useReducer } from "react"
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { State } from "../types/types";


const initialstate: State = {
    logged: false,
}

const init = (): State => {
    const savedState = localStorage.getItem('sesion');

    return ( savedState !== null ) ? JSON.parse( savedState ) : initialstate;   
}


export const AuthProvider = ({children}: { children: JSX.Element[] | JSX.Element }) => {

    const [state, dispatch] = useReducer( authReducer, initialstate, init );


  return (
    <AuthContext.Provider value={{ state, dispatch }}>
        { children }
    </AuthContext.Provider>
  )
}
