import { FC, useState } from 'react';
import { PokemonList } from './components/pokemonList';
import { PokemonDetails } from './components/pokemonDetails';

import './App.module.scss';
import styles from './App.module.scss';

const baseName = '';

export const App:FC = () => {
  const [pokemonName, setPokemonName] = useState(baseName)

  const handlePokemonSelected = (name: string) => {
    if (pokemonName === name) {
      setPokemonName(baseName)
      
      return
    }

    setPokemonName(name)
  }

  return (
    <div className={`container ${styles.pockemonsInner}`}>
      <PokemonList onPokemonSelected={handlePokemonSelected}/>

      {pokemonName && (
        <PokemonDetails pokemonName={pokemonName} />
      )}
    </div>
  );
};
