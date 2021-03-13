import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadCharacter } from './requests';

export class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {character: null};
  }

  async componentDidMount() {
    const {characterId} = this.props.match.params;
    const character = await loadCharacter(characterId);
    this.setState({character});
  }

  render() {
    const {character} = this.state;
    // prevent the problem if react tries to render the component when it's null
    if(!character) {
      return null;
    }
    return (
      <div>
        <h1 className="title">{character.name}</h1>
        <h2 className="subtitle">
          <Link to={`/companies/${character.arena.id}`}>{character.arena.name}</Link>
        </h2>
        {/* <div className="box">{job.description}</div> */}
      </div>
    );
  }
}
