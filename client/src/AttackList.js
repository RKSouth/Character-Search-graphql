import React, { Component } from 'react';

export class AttackList extends Component {
  render() {
    const {attack} = this.props;
    console.log({attack});
    return (<div>
          <table className="box">
        <tr>
        <th>Attack</th>
        <th>Type</th>
        </tr>

      
        {attack.map(this.renderAttack.bind(this))}
      
      </table>
      </div>
    );
  }

  renderAttack(attack) {
    const name = attack.character ? `${attack.name} at ${attack.character.name}` : attack.name;
    return (
    
        <tr>
      <td key={attack.id}><strong>{name}</strong>
      </td>
      <td>  {attack.type}</td>
      </tr>
    
    );
  }
}
