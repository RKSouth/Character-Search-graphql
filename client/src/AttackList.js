import React, { Component } from 'react';

export class AttackList extends Component {
  render() {
    const {attack} = this.props;
    console.log({attack});
    return (<div>
      <h2><strong>Attack - - - and Type </strong></h2>
      <ul className="box">
        {attack.map(this.renderAttack.bind(this))}
      </ul>
      </div>
    );
  }

  renderAttack(attack) {
    const name = attack.character ? `${attack.name} at ${attack.character.name}` : attack.name;
    return (
      <li key={attack.id}>
      <strong>{name}</strong> - - - -  {attack.type}
      </li>
    );
  }
}
