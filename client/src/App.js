import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isLoggedIn, logout } from './auth';
import { ArenaDetail } from './ArenaDetail';
import { LoginForm } from './LoginForm';
import { CharacterBoard } from './CharacterBoard';
import { CharacterDetail } from './CharacterDetail';
import { CharacterForm } from './CharacterForm';
import { NavBar } from './NavBar';
import { Register } from './Register';
import "./style.css"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: isLoggedIn()};
  }

  handleLogin() {
    this.setState({loggedIn: true});
    this.router.history.push('/');
  }

  handleLogout() {
    logout();
    this.setState({loggedIn: false});
    this.router.history.push('/');
  }

  render() {
    const {loggedIn} = this.state;
    return (
      <Router ref={(router) => this.router = router}>
        <div>
          <NavBar loggedIn={loggedIn} onLogout={this.handleLogout.bind(this)} />
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={CharacterBoard} />
                <Route path="/arenas/:arenaId" component={ArenaDetail} />
                {/* <Route path="/attacks/:attackId" component={AttackList} /> */}
                <Route exact path="/characters/new" component={CharacterForm} />
                <Route path="/characters/:characterId" component={CharacterDetail} />
                <Route exact path="/register" component={Register}  />
                <Route exact path="/login" render={() => <LoginForm onLogin={this.handleLogin.bind(this)} />} />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}
