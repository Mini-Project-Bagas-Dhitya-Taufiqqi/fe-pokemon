import React from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";

import { usePokemonContext } from "../../services/context/PokemonContext";

const MyPokemon = () => {
  const { capturedPokemons } = usePokemonContext();

  return (
    <Container title={"My Pokemon"}>
      <div className="h-screen">
        <div className="h-max w-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-10">
          {capturedPokemons
            ? capturedPokemons?.map((item) => {
                return (
                  <Card type={"information"} key={item.name}>
                    <div className="mr-20">
                      <img src={item?.image} alt="" />
                      <p className="text-black font-normal">
                        Origin Name :{" "}
                        <span className="font-bold">{item?.name}</span>
                      </p>
                      <p className="text-black font-normal">
                        Given Name :{" "}
                        <span className="font-bold">{item?.nickname}</span>
                      </p>
                    </div>
                    <div className="gap-y-5 text-black">
                      <p>
                        <b>Abilities:</b>
                      </p>
                      <ul>
                        {item?.abilities.map((ability, index) => (
                          <li key={index}>
                            <span className="bullet">&bull;</span>{" "}
                            {ability.ability.name}
                          </li>
                        ))}
                      </ul>
                      <p>
                        <b>Base Experience:</b> {item?.base_experience}
                      </p>
                      <p>
                        <b>Height:</b> {item?.height}
                      </p>
                      <p>
                        <b>Weight:</b> {item?.weight}
                      </p>
                    </div>
                  </Card>
                );
              })
            : null}
        </div>
      </div>
    </Container>
  );
};

export default MyPokemon;
