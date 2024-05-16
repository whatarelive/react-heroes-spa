import { heroes } from "../data/heroes";


// Funcion para buscar a un hero por su nombre.
export const getHeroByName = ( name = '' ) => {

    // El parametro nombre los pasamos a minisculas y eliminamos los espacios.
    name = name.toLowerCase().trim();

    // Comprobamos que el nombre no este vacio.
    if( name.length === 0 ) return [];

    // Filtramos el arreglo de heroes hasta encontrar a un hero con un nombre parecido.
    return heroes.filter( 
        hero => hero.superhero.toLowerCase().includes( name )
    );
}