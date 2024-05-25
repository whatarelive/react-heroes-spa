export type Heroe = {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

export type Characters = {
    alter_ego: string, 
    characters: string
}

export type FormValue = {
    searchText?: string
    username?: string 
}