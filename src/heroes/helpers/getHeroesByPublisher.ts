import { heroes } from "../data/heroes"    // Data de los Heroes.


// Funcion para buscar el hero segun la propiedad de publisher.
export const getHeroesByPublisher = ( publisher: string ) => {

    // Arreglo de Publishers Validos.
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    // Comprobamos que el publisher se encuentre dentro de los validos.
    if ( !validPublisher.includes( publisher ) ) 
        throw new Error(`${ publisher } is not a valid publisher`);

    // Filtramos los heroes usando el publisher.
    return heroes.filter( heroe => heroe.publisher === publisher );
}