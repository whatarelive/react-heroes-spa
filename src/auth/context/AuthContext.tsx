import { createContext } from "react";
import { State } from '../types/types';

type AuthContextType = {
    state: State,
    login: CallableFunction,
    logout: CallableFunction
}

const intialContext = { 
    state: { 
        logged: false, 
        name: '' 
    }, 
    login: () => {},
    logout: () => {}
}

export const AuthContext = createContext<AuthContextType>( intialContext );