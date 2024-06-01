import { authReducer } from "../../../src/auth/context/authReducer";
import { AuthAction, State, types } from "../../../src/auth/types/types"




describe('Pruebas en AuthReducer', () => {

    // Declaramos un estado inicial 
    const initialState: State = {
        logged: false,
        name: ''
    }

    // Test #1 : Sobre el estado inicial.
    test('debe de retornar el estado por defecto', () => {
        // llamamos al reducer usando el estado inicial.
        const state = authReducer( initialState );

        // Esperamos que el estado devuelto sea igual al inicial.
        expect( state ).toBe( initialState );
    })


    // Test #2: Sobre la accion de login del AuthReducer. 
    test('debe de (login) llamar al login autenticar y establecer el user', () => { 
        // Declaramos un action para el reducer.
        const action: AuthAction = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Jose Luis',
            }
        }

        // Llamamos al reducer pansandole el estado inicial y el action creado
        const state = authReducer( initialState, action );

        // Esperamos que la propiedad logged sea verdadera.
        expect( state.logged ).toBeTruthy();
        // Esperamos que la propiedad nombre tenga el mismo valor que se le paso. 
        expect( state.name ).toBe( action.payload?.name )
    })


    // Test #3: Sobre la accion de logout del AuthReducer.
    test('debe de (logout) borrar el name del usuario y logged en false', () => {
      // Declaramos un action para el reducer.
      const action: AuthAction = {
        type: types.logout,
      };

      // Modificamos las propiedades del estado inicical.
      initialState.logged = true;
      initialState.name = "Jose Luis";

      // Llamamos al reducer pansandole el estado inicial modificado y el action creado
      const state = authReducer(initialState, action);

      // Esperamos que la propiedad logged sea falsa.
      expect( state.logged ).toBeFalsy();
      // Esperamos que la propiedad name no este definida.
      expect( state.name ).toBe( undefined );
    })
})