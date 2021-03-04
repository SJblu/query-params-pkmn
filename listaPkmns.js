const axios = require('axios');

let requisitador = axios.create({
    baseURL: '',
});

let listaPkmns = []

function criaListaPkmns(resposta) {
    let { results } = resposta.data;
    for (let pokemon of results) {
        listaPkmns.push(pokemon.name)
    }

}

requisitador.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then(criaListaPkmns);

module.exports = listaPkmns