// Desafio Aula 10:
// 1 - Criar um servidor express
// 2 - Deve ter uma rota para trazer uma lista de pokemons
// 3 - A rota pode receber uma Query Param para filtrar pokemons pelo nome
// 4 - Chamar a api da PokeDex, utilizando o módulos axios, para buscar a lista de pokemons (1000 pontos)

const express = require('express');
const app = express();
const listaPkmns = require('./listaPkmns')


app.get('/', (req, res) => {
    // res.send('= = = MUNDO POKEMON = = =')
    res.send(`
    <h3> = = = Mundo Pokemon = = = </h3>
    <p>Rota existente: '/pokemons'</p>
    `)
})

// Query params
// ex.: localhost:3000/usuarios?nome=Pineco
app.get('/pokemons', (req, res) => {
    const { name } = req.query;
    let listaRetorno = listaPkmns.filter(i => i.includes(name || ''));
    return res.json(listaRetorno)
})

// Route params
app.get('/pokemons/:pokemon', (req, res) => {
    const { pokemon } = req.params
    // let listaRetorno = listaPkmns.filter(i => i.includes(name.toLowerCase() || ''));
    res.send(`<p><strong>${pokemon}</strong>, eu escolho você!!</p>`)
})



app.listen(3000, () => {
    console.log('Server Running!!')
})