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

export const getDetailCharacter = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
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

export const catchPokemon = async () => {
  try {
    const response = await axios.get(
      `https://noon-neighborly-bobcat.glitch.me/catch-pokemon`
    );
    console.log("suc : ", response?.data);
    return {
      status: "success",
      data: response.data,
    };
  } catch (error) {
    console.log("err : ", error);
    return {
      status: "failed",
      message: error,
    };
  }
};

export default {
  getAllPokemon,
  getDetailPokemon,
  getDetailCharacter,
  catchPokemon,
};
