import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import {SearchPage} from "../../../src/heroes";



const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe("Pruebas en el componente SearchPage", () => {

    // Funcion para reiniciar a todos los mocks para cada test.
    beforeEach(() => jest.clearAllMocks());

    // Test #1: Sobre la UI del componente.
    test('Snapshot del componente', () => {
        // Renderizamos el componente.
        const { container  } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        // Creamos una captura del componente.
        expect( container ).toMatchSnapshot();
    })

    // Test #2: Sobre los queryParams.
    test('debe de mostrar a Batman y el input con el valor de queryString', () => {
        render(
            <MemoryRouter initialEntries={['/search?=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        // Extraemos el input del componente renderizado.
        const input = screen.getByRole('textbox') as HTMLInputElement;
        // Esperamos que el valor del input contenga el valor "batman".
        expect( input.value ).toBe('batman');

        // Extraemos la imagen del componente renderizado.
        const  img = screen.getByRole('img') as HTMLImageElement;
        // Esperamos que el src del componente imagen contenga la ruta de la imagen de batman.
        expect( img.src ).toContain('./dc-batman.jpg');

        // Extraemos el alert-error del componente renderizado
        const alert = screen.getByLabelText('alert-error') as HTMLDivElement;
        // Esperamos que la propiedad display del style del alert-error sea "none".
        expect( alert.style.display ).toBe('none');
    })

    // Test #3:
    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-error') as HTMLDivElement;
        expect( alert.style.display ).not.toBe('none');
    })

    // Test #4:
    test('debe de llamar al navigate', () => {

        const inputValue = 'batman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: inputValue } });

        const form = screen.getByRole('form') as HTMLFormElement;
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);
    })
});