import React, { Component } from 'react';

export class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', image: '', attack: []};
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleClick(event) {
    event.preventDefault();
    console.log('should post a new job:', this.state);
  }

  render() {
    const {name, image, attack} = this.state;
    return (
      <div>
        <h1 className="title">New Character</h1>
        <div className="box">
          <form>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" name="name" value={name}
                  onChange={this.handleChange.bind(this)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Image (must be in http://) format</label>
              <div className="control">
                <textarea className="input" 
                  name="image" value={image} onChange={this.handleChange.bind(this)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Attacks (must include 5 attacks)</label>
              <div className="control">
                <textarea className="input" 
                  name="attack" value={attack} onChange={this.handleChange.bind(this)} />
                   <textarea className="input" 
                  name="attack" value={attack} onChange={this.handleChange.bind(this)} />
                   <textarea className="input" 
                  name="attack" value={attack} onChange={this.handleChange.bind(this)} />
                   <textarea className="input" 
                  name="attack" value={attack} onChange={this.handleChange.bind(this)} />
                   <textarea className="input" 
                  name="attack" value={attack} onChange={this.handleChange.bind(this)} />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link" onClick={this.handleClick.bind(this)}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
