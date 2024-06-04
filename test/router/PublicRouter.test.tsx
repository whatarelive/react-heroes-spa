import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRouter } from "../../src/router";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRouter />', () => {

    const contextValue = {
        state: { 
            logged: false, 
            id: '',
            name: '',
        }, 
        login: jest.fn(),
        logout: jest.fn()
    };

    test('debe de mostrar el children si no esta autentificado', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRouter>
                    <h1>Ruta publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta publica') ).toBeTruthy();
    })


    test('debe de navegar si esta autenticado', () => {
        contextValue.state = {
            logged: true,
            id: 'ABC',
            name: 'Strider'
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRouter>
                                <h1>Ruta publica</h1>
                            </PublicRouter>
                        }/>

                        <Route path="marvel" element={ <h1>Pagina Marvel</h1> }/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Pagina Marvel')).toBeTruthy();
    })
})