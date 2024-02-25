import { useState } from "react";
import { ObserverComponent } from "./observer/observer.component";
import { getPokemons } from "./pokemons.service";
import "./web.component.css";

export function PokeListComponent() {
  const [pokemons, setPokemons] = useState([]);

  async function addPageToList(page: number) {
    let testPokes: never[] = await getPokemons(page) as never[];
    setPokemons([...pokemons, ...testPokes]);
  }

  function recievePage(page: number) {
    addPageToList(page);
  }

  return (
    <section className="infinite-scrolling-container">
      <ul className="poke-list">
        {pokemons.map((pokemon: any, i) => {
          return (
            <li className="poke-card" key={i}>
              <span className="pokemon-name">{pokemon.name}</span>
              <img
                src={pokemon.sprites["front_default"]}
                alt={`${pokemon.name}-sprite`}
              />
            </li>
          );
        })}
      </ul>
      <ObserverComponent recievePage={recievePage}/>
    </section>
  );
}
