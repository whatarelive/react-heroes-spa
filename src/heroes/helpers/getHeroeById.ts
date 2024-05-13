import { heroes } from "../data/heroes"     // Data de los Heroes.


// Funcion para buscar un heroe por la propiedad de ID.
export const getHeroById = ( id: string | undefined ) => {

    // Se retorna el resultado de la busqueda del heroe por su ID.
    return heroes.find( hero => hero.id === id )
}