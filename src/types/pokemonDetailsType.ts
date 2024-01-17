export interface pokemonsDetailsType {
  abilities:                IAbility[];
  name:                     string;
  sprites:                  Sprites;
  stats:                    IStat[];
}

export interface IAbility {
  ability:   ISpecies;
  is_hidden: boolean;
  slot:      number;
}

export interface ISpecies {
  name: string;
  url:  string;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface IStat {
  base_stat: number;
  effort:    number;
  stat:      ISpecies;
}
