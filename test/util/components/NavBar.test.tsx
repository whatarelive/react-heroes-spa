import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/util"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { MemoryRouter } from 'react-router'


// Nota: Siempre que trabajamos con un contexto se 
//       debe agregar al renderizar junto con el <MemoryRouter/>.

const mockedUseNavigate = jest.fn();

// Como crear un mock de libreria de react
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en el componente <NavBar />', () => {

    // Creamos un contexto de ejemplo para evaluar el componente.
    const contextValue = {
        state: {
            logged: true,
            id: 'ABC',
            name: 'Strider'
        },
        login: jest.fn(),
        logout: jest.fn()
    }

    // Para reiniciar las funciones para cada test independiente.
    beforeEach(() => jest.clearAllMocks());

    // Test #1: Sobre la UI completa del componente.
    test('Snapshot del componente cuando se muestra el nombre', () => {
        // Renderizamos el componente.
        const { container } = render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Esperamos que se realice la comprobacion con el Snapshot anterior.
        expect( container ).toMatchSnapshot();
    })


    // Test #2: Sobre la información que debe mostrar la UI.
    test('debe de mostrar el nombre del usuario', () => {
        // Renderiamos el componente.
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Esperamos que el nombre del usuario se muestre correctamente.
        expect( screen.getByText( contextValue.state.name ) ).toBeTruthy();
    })


    // Test #3: Sobre el funcionamiento del botón del Logout.
    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
        // Renderizamos el componente.
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Extraemos el botón del componente renderizado.
        const logoutButton = screen.getByRole('button');
        // Disparamos un evento de click en el botón.
        fireEvent.click( logoutButton );

        // Esperamos que la función de logout asignada al botón sea llamada.
        expect( contextValue.logout ).toHaveBeenCalled();
        // Esperamos que la función navigate sea llamada con los siguientes valores.
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});
    })
})