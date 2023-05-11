import axios from "axios";
import { langColors } from "./confg";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangFrom = (repositories) =>{
  let stats = repositories
      .map((repository) => repository.language) // pegando somente as linguagens
      // O data vai somar quantas vezes a linguagem se repete
      .reduce((data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1  // criando a chave e somando as ligunagens repetidas
      }), []); // padrão passar um array vazio

  delete stats.null; // deletendo os null

      // criando um array com as keys do Object, name, count e color.
  stats = Object.keys(stats)
  .map((language) => ({
    name: language,
    count: stats[language],
    color:langColors[language.toLocaleLowerCase()] // colocando em minusculos, pq o arquivo confg.js, ta  em minusculo.
  })).sort((a, b) => b.count - a.count); // ordenando as maiores linguagens.

  return stats
}
