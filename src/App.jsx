import React from "react";
import PokemonRouter from "./routes";
import { PokemonProvider } from "./services/context/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <PokemonRouter />
    </PokemonProvider>
  );
};

export default App;
