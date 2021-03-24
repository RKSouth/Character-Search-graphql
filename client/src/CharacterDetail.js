import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadCharacter } from './requests';
import { AttackList } from './AttackList'
import './style.css';


export class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {character: null};
    this.state = {attack: []};
  }

  async componentDidMount() {
    const {characterId} = this.props.match.params;
    const character = await loadCharacter(characterId);
    this.setState({character});
    const attack = [character.attack];
    this.setState({attack});
    console.log({character});
    console.log({attack})
  }

  render() {
    const {character} = this.state;
    // const {attack} = this.state;
    // prevent the problem if react tries to render the component when it's null
    if(!character) {
      return null;
    }
    return (
      <div>
        <h1 className="title">{character.name}</h1>
        <img className="characterImage" src={"../Images-char/" + character.image} alt={character.name}/>
        <h2 className="subtitle">
          <Link className="arenaClick" to={`/arenas/${character.arena.id}`}>{character.arena.name}</Link>
        </h2>
        <AttackList attack={character.attack}/>
      </div>
    );
  }
}
