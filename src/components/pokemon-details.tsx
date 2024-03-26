import { FC } from "react";
import { Pokemon } from "../types/pokemon-response";
import { capitalizeFirstLetter } from "../helpers/capitalize-first-letter";

interface IProps {
  pokemon: Pokemon;
}

export const PokemonDetails: FC<IProps> = ({ pokemon }: IProps) => {
  const manualTranslations: Record<string, string> = {
    overgrov: "Переростати",
    blaze: "Полум'я",
    solarpower: "Сонячна енергія",
    chlorophyll: "Хлорофіл",
    torrent: "Злива",
    intimidate: "Залякати",
  };

  console.log("pokemon", pokemon);
  if (!pokemon) return null;
  const { name, abilities, sprites, base_experience, height, weight, moves } =
    pokemon;
  console.log(pokemon);

  return (
    <div className="pokemon__details">
      <h2>{capitalizeFirstLetter(name)}</h2>
      {sprites.front_default && <img src={sprites.front_default} alt={name} />}
      <h3>Abilities:</h3>
      <ul className="pokemon__details-list">
        {abilities &&
          abilities.map((ability, index) => (
            <li key={index} className="pokemon__details-list">
              {manualTranslations[ability.ability.name] ||
                capitalizeFirstLetter(ability.ability.name)}
            </li>
          ))}
      </ul>
      <h3>Characteristics:</h3>
      <ul className="pokemon__details-list">
        <li>Base experience {base_experience}</li>
        <li>Height {height}</li>
        <li>Weight {weight}</li>
        <h4>Moves:</h4>
        {moves &&
          moves.map((moveData, index) => (
            <li key={index}>{moveData.move.name}</li>
          ))}
      </ul>
    </div>
  );
};
