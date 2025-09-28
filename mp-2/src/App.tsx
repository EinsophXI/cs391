import { useEffect, useState } from 'react'
import PokemonPreview from './components/Pokemon';
import { type Pokemon } from './info';

export default function App() {

  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const actualData = await rawData.json();

      const pokeData: Pokemon[] = [];
      for (let i = 0; i < actualData.results.length; i++) {
        const { name, url } = actualData.results[i];
        const res = await fetch(url);
        const { sprites, types, abilities, moves, weight } = await res.json();
        pokeData[i] = {
          id: i + 1,
          name,
          url,
          sprite: sprites.front_default,
          types: types.map((t: { type: { name: string } }) => t.type.name),
          abilities: abilities.map((a: { ability: { name: string } }) => a.ability.name),
          moves: moves.map((m: { move: { name: string } }) => m.move.name),
          weight
        };
      }
      setData(pokeData)
    }

    fetchData()
      .then(() => console.log("Everything good"))
      .catch((e: Error) => console.log("Something wrong" + e));
  }, []);

  return (
    <>
      <PokemonPreview data={data} />
    </>
  )
}