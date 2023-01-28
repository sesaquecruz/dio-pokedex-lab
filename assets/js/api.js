"use strict";
class API {
    static getPokemon(url) {
        return fetch(url)
            .then((response) => response.json())
            .then(Pokemon.toPokemon);
    }
    static getPokemons(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((response) => response.results)
            .then((results) => results.map((result) => result.url))
            .then((urls) => urls.map(this.getPokemon))
            .then((pokemons) => Promise.all(pokemons));
    }
}
