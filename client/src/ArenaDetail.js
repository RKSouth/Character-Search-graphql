import React, { Component } from 'react';
import { loadArena } from './requests';
import { CharacterList } from './CharacterList'

export class ArenaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {arena: null};
  }

  async componentDidMount() {
    const {arenaId} = this.props.match.params;
    const arena = await loadArena(arenaId);
    this.setState({arena});
  }

  render() {
    const {arena} = this.state;
    // if there is no arena don't return stuff
    if (!arena) {
      return null;
    }
    return (
      <div>
        <h1 className="title">{arena.name}</h1>
        <div className="box">{arena.description}</div>
        <h5 className="title is-5">Characters At {arena.name}</h5>
        <CharacterList characters={arena.characters}/>
      </div>
    );
  }
}
