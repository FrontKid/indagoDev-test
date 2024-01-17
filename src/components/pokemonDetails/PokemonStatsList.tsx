import { FC } from 'react';
import { IStat } from '../../types/pokemonDetailsType';

import styles from './PokemonDetails.module.scss';

type TPokemonStatsListProps = {
  stats: IStat[];
};

//slice stats from - to
const STATS_INDEX_START = 0;
const STATS_INDEX_END = 5;

export const PokemonStatsList: FC<TPokemonStatsListProps> = ({ stats }) => {
  const slicedStats = stats.slice(STATS_INDEX_START, STATS_INDEX_END);

  return (
    <ul className={styles.card__characteristics}>
      <li className={styles.sectionTitle}>Characteristics</li>
      {slicedStats.map(({ stat, base_stat }) => (
        <li className={styles.label} key={stat.name}>
          {stat.name}: {base_stat}
        </li>
      ))}
    </ul>
  );
};
