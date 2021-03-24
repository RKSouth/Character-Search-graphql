import { getAccessToken, isLoggedIn } from './auth.js'

const endpointURL = 'http://localhost:9000/graphql'

async function graphqlRequest(query, variables = {}) {
// moved the object into a separate variable outside of response so that it can be modified
// because if the user isn't logged in then I don't want to set an authorization header
const request = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({query, variables})
};
if (isLoggedIn()) {
  request.headers['authorization'] = 'Bearer ' + getAccessToken();
}

// we are using the fetch api to make an http request
const response = await fetch(endpointURL, request );
// get the response body by parsing the response as json
const responseBody = await response.json();
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
      attack {
        name
        id
        type
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
        attack {
          name
          id
          type
        }
      } 
    }`

    const { characters } = await graphqlRequest(query);
    return characters;
}