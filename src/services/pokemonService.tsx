import axios from 'axios';
export const getDitto = async (): Promise<string> => {
  const response = await axios.get(
    'https://pogoapi.net/api/v1/possible_ditto_pokemon.json',
  );
  return response.data;
};

export const getPokemon = async (id: number): Promise<string> => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + id + '/',
  );
  return response.data;
};
