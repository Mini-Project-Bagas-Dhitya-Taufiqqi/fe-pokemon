import axios from "axios";

export const getAllPokemon = async (limit) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
    );
    return {
      status: "success",
      data: response.data,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error,
    };
  }
};

export const getDetailPokemon = async (url) => {
  try {
    const response = await axios.get(url);
    return {
      status: "success",
      data: response.data,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error,
    };
  }
};

export default { getAllPokemon, getDetailPokemon };
