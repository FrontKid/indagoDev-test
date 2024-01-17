import { FC, useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

import { usePokemonsListQuery } from '../../api/pokemonApi';

import { EListLimit } from './types';

import { Error } from '../Error';
import { Loader } from '../Loader';

import styles from './PokemonList.module.scss';
import classNames from 'classnames';

type TPokemonListProps = {
  onPokemonSelected: (name: string) => void;
};

export const PokemonList: FC<TPokemonListProps> = ({ onPokemonSelected }) => {
  const [pokemonRenderLimit, setPokemonRenderLimit] = useState(EListLimit.LESS);

  const {
    data: PokemonsData,
    isLoading,
    isError,
  } = usePokemonsListQuery({
    limit: pokemonRenderLimit,
  });

  const handleRenderLimit = (limit: number) => {
    setPokemonRenderLimit(limit);
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!PokemonsData) {
    return <h1>Plz reaload page...</h1>;
  }

  return (
    <div className={styles.pokemonList}>
      <div className={styles.pokemonList__buttonContainer}>
        <h1 className={styles.pokemonList__title}>Our Best Pokemon</h1>

        <p className={styles.pokemonList__description}>
          We're glad you're here! We're striving to be the best resource about
          the Pokémon World on the net, so we cover all aspects of Nintendo's
          smash hit
        </p>

        <p className={styles.pokemonList__optionQuantity}>
          Select the quantity displayed{' '}
        </p>

        <LoadingButton
          className={classNames(styles.pokemonList__limitButton, {
            [styles.yellow]: pokemonRenderLimit === EListLimit.LESS,
          })}
          loading={isLoading}
          variant="contained"
          onClick={() => handleRenderLimit(EListLimit.LESS)}
        >
          {EListLimit.LESS}
        </LoadingButton>

        <span> or </span>

        <LoadingButton
          className={`${styles.pokemonList__limitButton} ${classNames({
            [styles.yellow]: pokemonRenderLimit === EListLimit.MORE,
          })}`}
          loading={isLoading}
          variant="contained"
          onClick={() => handleRenderLimit(EListLimit.MORE)}
        >
          {EListLimit.MORE}
        </LoadingButton>
      </div>

      <ul className={styles.pokemonList__list}>
        <h2 className={styles.pokemonList__listTitle}>Pokemons</h2>

        {PokemonsData.map(({ name }) => (
          <li key={name}>
            <button
              className={styles.pokemonList__listItem}
              onClick={() => onPokemonSelected(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
