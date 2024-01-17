import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';
import { ISpecies, pokemonsDetailsType } from '../../types/pokemonDetailsType';
import {
  PokemonsResponse,
  TPokemonsDetailsQuery,
  TPokemonsListQuery
} from './types';

const POKEMON_BASE_API = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon';

const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POKEMON_BASE_API }),
  endpoints: builder => ({
    pokemonsList: builder.query<ISpecies[], TPokemonsListQuery>({
      query: ({ limit }) => ({
          url: POKEMON_URL,
          params: {
            limit,
          }
        }),
      transformResponse: (response: PokemonsResponse) => response.results
    }),
    pokemonsDetails: builder.query<pokemonsDetailsType, TPokemonsDetailsQuery>({
      query: ({ name }) => `${POKEMON_URL}/${name}`,
    }),
  }),
});

export const { usePokemonsListQuery, usePokemonsDetailsQuery } = pokemonApi;
export { pokemonApi };