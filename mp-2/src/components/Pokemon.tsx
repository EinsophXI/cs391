import styled from "styled-components";
import type { Pokemon } from "../info.ts";

const PreviewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* space between items */
  justify-content: center; /* center items in a row */
`;

const StyledImg = styled.img`
  width: 50%;
  max-width: 50%;
  height:auto;
`;

const EntryDiv = styled.div`
  border:2px solid white;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

function format(name: string) {
  return name.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

export default function PokemonPreview({ data }: { data: Pokemon[] }) {
  return (
    <PreviewDiv>
      {
        data.map((char: Pokemon) =>
          <EntryDiv key={char.id}>
            <h1>{char.name.charAt(0).toUpperCase() + char.name.substring(1)}</h1>
            <StyledImg src={char.sprite} alt={char.name} />
            <h2> Type: {char.types.map(format).join(", ")}</h2>
            <h2> Ability: {char.abilities.map(format).join(", ")}</h2>
            {/* <h2> Moves: {char.moves.map(format).join(", ")}</h2> */}
            <h2> Weight: {char.weight}</h2>
          </EntryDiv>
        )
      }
    </PreviewDiv>
  )
}