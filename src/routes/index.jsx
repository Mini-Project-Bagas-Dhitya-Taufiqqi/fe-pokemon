import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonListPage from "../pages/pokemon-list-page";
import PokemonDetail from "../pages/pokemon-detail";
import MyPokemon from "../pages/my-pokemon";

const PokemonRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon-detail" element={<PokemonDetail />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PokemonRouter;
