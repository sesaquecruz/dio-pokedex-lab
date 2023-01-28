class Pokemon {
    readonly id: number
    readonly name: string
    readonly image: string
    readonly types: string[]

    private constructor(id: number, name: string, image: string, types: string[]) {
        this.id = id
        this.name = name
        this.image = image
        this.types = types
    }

    static toPokemon(details: any): Pokemon {
        return new Pokemon(
            details.id,
            details.name,
            details.sprites.other.dream_world.front_default,
            details.types.map((t: any) => t.type.name),
        )
    }
}