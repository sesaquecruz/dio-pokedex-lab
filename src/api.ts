class API {
    private static getPokemon(url: string): Promise<Pokemon> {
        return fetch(url)
            .then((response) => response.json())
            .then(Pokemon.toPokemon)
    }

    static getPokemons(url: string): Promise<Pokemon[]> {
        return fetch(url)
            .then((response) => response.json())
            .then((response) => response.results)
            .then((results) => results.map((result: any): string => result.url))
            .then((urls) => urls.map(this.getPokemon))
            .then((pokemons) => Promise.all<Pokemon>(pokemons))
    }
}