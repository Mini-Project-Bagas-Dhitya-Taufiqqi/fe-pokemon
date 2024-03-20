import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

import { getDetailCharacter } from "../../services/apis/api";

const PokemonDetail = () => {
  const location = useLocation();
  const name = location?.state?.name;
  const image = location?.state?.image;

  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [nickname, setNickname] = useState("");
  const [captured, setCaptured] = useState(false);
  const [loading, setLoading] = useState(true);

  const getInformationCharacter = async (name) => {
    const result = await getDetailCharacter(name);
    setPokemonInfo(result);
    setLoading(false);
  };

  useEffect(() => {
    if (name) {
      getInformationCharacter(name);
    }
  }, [name]);

  const catchPokemon = () => {
    const random = Math.random();
    if (random < 0.5) {
      setCaptured(true);
    } else {
      setCaptured(false);
    }
  };

  const addToMyPokemonList = () => {
    alert("Pokemon added to My Pokemon List");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container
      title={`Detail Information of ${
        name.charAt(0).toUpperCase() + name.slice(1)
      }`}
    >
      <div className="h-full">
        <div className="h-96">
          {pokemonInfo?.data && (
            <Card type={"information"}>
              <img
                src={image}
                className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
              />
              <div className="gap-y-5 text-black">
                <p>
                  <b>Abilities:</b>
                </p>
                <ul>
                  {pokemonInfo?.data?.abilities.map((ability, index) => (
                    <li key={index}>
                      <span className="bullet">&bull;</span>{" "}
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
                <p>
                  <b>Base Experience:</b> {pokemonInfo?.data?.base_experience}
                </p>
                <p>
                  <b>Height:</b> {pokemonInfo?.data?.height}
                </p>
                <p>
                  <b>Weight:</b> {pokemonInfo?.data?.weight}
                </p>
                <p>
                  <b>Location Area:</b>{" "}
                  {pokemonInfo?.data?.location_area_encounters}
                </p>
                {!captured && (
                  <div className="mt-20 space-x-10">
                    <input
                      type="text"
                      placeholder="Enter nickname"
                      className="p-3 rounded-md bg-slate-100 focus:outline-none"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                    <button
                      className="bg-cyan-700 hover:bg-cyan-800 focus:outline-none border-none text-white"
                      onClick={catchPokemon}
                    >
                      Catch Pokemon
                    </button>
                  </div>
                )}
                {captured && (
                  <div className="mt-20 space-x-10">
                    <p>Congratulations! You caught the Pokemon!</p>
                    <p>Give it a nickname:</p>
                    <input
                      type="text"
                      placeholder="Enter nickname"
                      className="p-3 rounded-md bg-slate-100 focus:outline-none"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                    <button
                      className="bg-cyan-700 hover:bg-cyan-800 focus:outline-none border-none text-white"
                      onClick={addToMyPokemonList}
                    >
                      Add to My Pokemon List
                    </button>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PokemonDetail;
