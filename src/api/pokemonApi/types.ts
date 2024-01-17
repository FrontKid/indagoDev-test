import { ISpecies } from "../../types/pokemonDetailsType";

export interface PokemonsResponse {
  results: ISpecies[]
}

export type TPokemonsListQuery = {
  limit: number;
}

export type TPokemonsDetailsQuery = {
  name: string;
}