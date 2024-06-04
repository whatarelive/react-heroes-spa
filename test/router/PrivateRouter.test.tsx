import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRouter } from "../../src/router";
import { MemoryRouter } from "react-router";


describe('Pruebas en <PrivateRouter />', () => {

    const contextValue = {
        state: {
            logged: true,
            id: 'ABC',
            name: 'Strider'
        },
        login: jest.fn(),
        logout: jest.fn()
    };


    test('debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
    })
})