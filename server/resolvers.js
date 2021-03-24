const db = require('./db')

const Query = {
    attack: (root, {id}) => db.attacks.get(id),
    attacks: () => db.attacks.list,
    arena: (root, {id}) => db.arenas.get(id),
    //our parent value is our root object, args contains the arguments passed in the graphql query
    // then we need to return the character
    character: (root, {id}) => db.characters.get(id),
    characters: () => db.characters.list()
}

const Mutation = {
    createCharacter: (root, {input}, {user}) => {
        // console.log('user:', user);
        // return null;
        if(!user){
            throw new Error('Unauthorized');
        }
        // changed input to ...input to get all of the data from db.characters
       const id = db.characters.create({...input, arenaId: user.arenaId});
       return db.characters.get(id);
    }
};

const Arena = {
    characters: (arena) => db.characters.list()
        .filter((character) => character.arenaId === arena.id)
}

// we need to declare a new object (like the schema) of character where we can put functions to resolve the arena field
const Character = {
    // the arena comes for the parent (character) and we want to get the arena with same id as the one listed with the character
    arena: (character) => db.arenas.get(character.arenaId),
    attack: (character) => db.attacks.list()
        .filter((attack) => attack.characterId === character.id)
}

const Attack = {
    character: (attack) => db.characters.get(attack.characterId)
}

// make sure all the objects are being exported here
module.exports = { Query, Mutation, Arena, Character, Attack }