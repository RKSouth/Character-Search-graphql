const endpointURL = 'http://localhost:9000/graphql'

async function graphqlRequest(query, variables = {}) {
    // we are using the fetch api to make an http request
    const response = await fetch(endpointURL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({query, variables})
    });
    // get the response body by parsing the response as json
    const responseBody = await response.json();
    console.log(responseBody);
    // to check if there is an error in the graphql
    if (responseBody.errors) {
      // using the map function because the errors are an array and we want to see all of the errors, show them all in a string with join.
      const message = responseBody.errors.map((error) =>error.message).join('\n')
      throw new Error(message)
    }
    // and then return a value
    return responseBody.data;
}

export async function loadArena(id) {
  console.log(id);
  const query = `query ArenaQuery($id: ID!) {
    arena(id: $id) {
      id
      name
      description
      characters {
        id
        name
        image
      }
    }
  }`;

  const {arena} = await graphqlRequest(query, {id});
  return arena;
}

export async function loadCharacter(id) {
  const query = `query CharacterQuery($id: ID!){
    character(id: $id) {
      id
      name
      image
      arena {
        id
        name
        description
      }
    }
  }`

  const {character} =  await graphqlRequest(query, {id});
  // and then return a value
  return character;
}

 export async function loadCharacters() {
  const query = `
    { characters {
        id
        name
        image
        arena {
          id
          name
          description
        }
      } 
    }`

    const { characters } = await graphqlRequest(query);
    return characters;
}