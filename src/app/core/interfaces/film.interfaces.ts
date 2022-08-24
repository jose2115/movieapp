
export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: Date;
    edited: Date;
  }

  export interface Character {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: Date;
    edited: Date;
  }

  export interface characters{
    character: Character[]
  }

  export interface FilmState {
    films: Film[]
  }

  export interface FilmOne {
    film: Film
  }

  export interface data {
    count   : number,
    next    : string,
    previous: string,
    results : Character[]
  }

  export interface CharacterState {
    data: data
  }
