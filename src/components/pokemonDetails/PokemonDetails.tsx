import { FC } from 'react';

import { usePokemonsDetailsQuery } from '../../api/pokemonApi';

import { PokemonAbilityList } from './PokemonAbilityList';
import { PokemonStatsList } from './PokemonStatsList';
import { Loader } from '../Loader';
import { Error } from '../Error';

import styles from './PokemonDetails.module.scss';

type TPokemonDetailsProps = {
  pokemonName: string;
};

export const PokemonDetails: FC<TPokemonDetailsProps> = ({ pokemonName }) => {
  const {
    data: PokemonDetailsData,
    isLoading,
    isError,
  } = usePokemonsDetailsQuery({
    name: pokemonName,
  });

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!PokemonDetailsData) {
    return <h1>Plz reaload page...</h1>;
  }

  const { sprites, name, abilities, stats } = PokemonDetailsData;

  return (
    <div className={styles.card}>
      <div className={styles.card__ImgBox}>
        <div>
          <img src={sprites.front_default} alt={name} />
        </div>

        <h3 className={styles.card__title}>{name}</h3>
      </div>

      <PokemonAbilityList abilities={abilities} />
      <PokemonStatsList stats={stats} />
    </div>
  );
};

<div className="card">
  <div className="card__imgBox">
    <div>
      <img src="" alt="" />
    </div>

    <h3 className="card__title"></h3>
  </div>

  <div>
    <span>Abilities: </span>
  </div>
  <div>
    <span>Characteristics</span>
  </div>
</div>;
