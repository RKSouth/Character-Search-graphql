import React, { Component } from 'react';

export class AttackList extends Component {
  render() {
    const {attack} = this.props;
    console.log({attack});
    return (
      <ul className="box">
        {attack.map(this.renderAttack.bind(this))}
      </ul>
    );
  }

  renderAttack(attack) {
    const name = attack.character ? `${attack.name} at ${attack.character.name}` : attack.name;
    return (
      <li key={attack}>
      {name} {attack.type}
      </li>
    );
  }
}
