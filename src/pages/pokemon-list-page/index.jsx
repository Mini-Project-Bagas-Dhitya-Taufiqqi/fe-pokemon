import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";

import { getAllPokemon, getDetailPokemon } from "../../services/apis/api";

const PokemonListPage = () => {
  const [character, setCharacter] = useState([]);

  const getPokemonList = async () => {
    const pokemonData = await getAllPokemon(10);
    setCharacter(pokemonData.data.results);

    pokemonData.data.results.forEach((pokemon) => {
      getPokemonDetail(pokemon.url);
    });
  };

  const getPokemonDetail = async (url) => {
    try {
      const response = await getDetailPokemon(url);
      return response.data;
    } catch (error) {
      console.error("Failed to get Pokemon detail: ", error);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <Container title={"Pokemon List"}>
      <div className="grid grid-cols-3 gap-5">
        {character.map((item, index) => (
          <Card key={index}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              className="w-36 h-36"
              alt={item.name}
            />
            <p className="font-semibold">{item.name}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default PokemonListPage;
