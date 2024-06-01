import { types } from "../../../src/auth/types/types"

describe('Pruebas em "Types.ts"', () => { 
 
    // Test #1: Sobre los Types necesarios. 
    test('debe de retornar estos types', () => {

        // Types esperados
        const strictTypes = {
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        }

        // Esperamos que sean iguales.
        expect( types ).toEqual( strictTypes );
    })
})