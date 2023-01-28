"use strict";
const list = document.getElementById('list');
const load = document.getElementById('load');
let offset = 0;
let limit = 10;
const max = 151;
function getUrl() {
    return `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
}
function updateOffsetAndLimit() {
    offset += limit;
    const remaining = max - offset;
    if (remaining < limit)
        limit = remaining;
}
function hasMore() {
    return (offset + limit) < max;
}
function toLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.types[0]}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.image}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}
function loadMore() {
    API.getPokemons(getUrl())
        .then((pokemons) => list.innerHTML += pokemons.map(toLi).join(''));
}
loadMore();
load.addEventListener('click', () => {
    updateOffsetAndLimit();
    loadMore();
    if (!hasMore()) {
        load.parentElement.removeChild(load);
    }
});
