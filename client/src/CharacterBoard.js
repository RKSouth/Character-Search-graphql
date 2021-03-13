import React, { Component } from 'react';
import { CharacterList } from './CharacterList';
import { loadCharacters } from './requests'

export class CharacterBoard extends Component {
    // we are using a constructor because we want to keeps the jobs state up to date
    constructor(props) {
      super(props);
      // initializing the state
      this.state = {characters: []};
    }

     // we need to load the data from the server
  // needs to be async because loadJobs returns a promise
  async componentDidMount() {
    const characters = await loadCharacters();
    // updating the components state with the response received from the server
    // make sure you use curly brackets inside of parenthesis
    this.setState({characters});
  }
  render() {
    // extract the jobs data from the component state
    const {characters} = this.state;
    return (
      <div>
        <h1 className="title">Character Board</h1>
        <CharacterList characters={characters} />
      </div>
    );
  }
}
