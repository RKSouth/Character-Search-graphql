const db = require('./db')

const Query = {
    arena: (root, {id}) => db.arenas.get(id),
    //our parent value is our root object, args contains the arguments passed in the graphql query
    // then we need to return the character
    character: (root, {id}) => db.characters.get(id),
    characters: () => db.characters.list()
}

const Arena = {
    characters: (arena) => db.characters.list()
        .filter((character) => character.arenaId === arena.id)
}

// we need to declare a new object (like the schema) of character where we can put functions to resolve the arena field
const Character = {
    // the arena comes for the parent (character) and we want to get the arena with same id as the one listed with the character
    arena: (character) => db.arenas.get(character.arenaId)
}

const Attacks = {
    attacks: (character) => db.character.list()
        .filter((attacks) => attacks.characterId === character.id)
}

// make sure all the objects are being exported here
module.exports = { Query, Arena, Character,Attacks }