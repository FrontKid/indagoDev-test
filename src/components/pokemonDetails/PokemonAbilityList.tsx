import { FC } from 'react';
import { IAbility } from '../../types/pokemonDetailsType';

import styles from './PokemonDetails.module.scss';

type TPokemonAbilityListProps = {
  abilities: IAbility[];
};

export const PokemonAbilityList: FC<TPokemonAbilityListProps> = ({
  abilities,
}) => (
  <ul className={styles.card__abilities}>
    <li className={styles.sectionTitle}>Abilities: </li>
    {abilities.map(({ ability }) => (
      <li className={styles.ability} key={ability.name}>
        {ability.name}
      </li>
    ))}
  </ul>
);
