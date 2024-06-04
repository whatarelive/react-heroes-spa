import { MemoryRouter } from "react-router"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { render, screen } from "@testing-library/react"
import { AppRouter } from "../../src/router/AppRouter"



describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        state: {
            logged: false,
            id: '',
            name: ''
        },
        login: jest.fn(),
        logout: jest.fn()
    }

    test('debe de mostrar el login si no esta autenticado', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByAltText('Login').length ).toBeGreaterThan(1);
    })
})