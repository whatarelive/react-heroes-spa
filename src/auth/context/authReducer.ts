import { AuthAction, State, types } from "../types/types";


export const authReducer = ( initialState: State, action: AuthAction ): State => {

    switch ( action?.type ) {
        case types.login:
            return {
                ...initialState,
                logged: true,
                name: action.payload?.name
            };
        
        case types.logout: 
            return {
                logged: false,
            };
    
        default:
            return initialState;
    }
}