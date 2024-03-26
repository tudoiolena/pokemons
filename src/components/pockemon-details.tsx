import { FC } from "react";
import { Pokemon } from "../types/pockemon-response";

interface IProps {
  pokemon: Pokemon;
}

export const PokemonDetails: FC<IProps> = ({ pokemon }: IProps) => {
  const manualTranslations: Record<string, string> = {
    overgrov: "переростати",
    blaze: "полум'я",
    solarpower: "сонячна енергія",
    chlorophyll: "хлорофіл",
    torrent: "злива",
    intimidate: "залякати",
  };

  console.log("pokemon", pokemon);
  if (!pokemon) return null;
  const { name, abilities, sprites, base_experience, height, weight, moves } =
    pokemon;
  console.log(pokemon);

  return (
    <div>
      <h2>{name}</h2>
      {sprites.front_default && <img src={sprites.front_default} alt={name} />}
      <h3>Abilities:</h3>
      <ul>
        {abilities &&
          abilities.map((ability, index) => (
            <li key={index}>
              {manualTranslations[ability.ability.name] || ability.ability.name}
            </li>
          ))}
      </ul>
      <h3>Characteristics:</h3>
      <ul>
        <li>Base experience {base_experience}</li>
        <li>Height {height}</li>
        <li>Weight {weight}</li>
        <h3>Moves:</h3>
        {moves &&
          moves.map((moveData, index) => (
            <li key={index}>{moveData.move.name}</li>
          ))}
      </ul>
    </div>
  );
};
