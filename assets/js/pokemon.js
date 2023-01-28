"use strict";
class Pokemon {
    constructor(id, name, image, types) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.types = types;
    }
    static toPokemon(details) {
        return new Pokemon(details.id, details.name, details.sprites.other.dream_world.front_default, details.types.map((t) => t.type.name));
    }
}
