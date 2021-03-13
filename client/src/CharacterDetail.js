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
    return (
      <div>
        <h1 className="title">{character.name}</h1>
        <h2 className="subtitle">
          <Link to={`/arenas/${character.arena.id}`}>{character.arena.name}</Link>
        </h2>
        {/* <div className="box">{character.image}</div> */}
      </div>
    );
  }
}
