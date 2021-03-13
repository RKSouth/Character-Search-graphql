import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CharacterList extends Component {
  render() {
    const {characters} = this.props;
    return (
      <ul className="box">
        {characters.map(this.renderCharacter.bind(this))}
      </ul>
    );
  }

  renderCharacter(character) {
    const name = character.arena ? `${character.name} at ${character.arena.name}` : character.name;
    return (
      <li className="media" key={character.id}>
        <div className="media-content">
          <Link to={`/characters/${character.id}`}>{name}</Link>
        </div>
      </li>
    );
  }
}
