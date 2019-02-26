import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Race from './components/Race/RaceInfo'
import Home from './components/Home/Home'
import ClassScreen from './components/Class/ClassScreen'
import Stats from './components/Stats/Stats'
import Bio from './components/Bio/Bio'
import Align from './components/Bio/Align'
import Weapons from './components/Equipment/Weapons'
import Armor from './components/Equipment/Armor'
import Other from './components/Equipment/Other'
import Spells from './components/Equipment/Spells'
import Overview from './components/Overview/Overview'

class App extends Component
{
  state = {

  }

  render()
  {
    return (
      <div className="App">

        <BrowserRouter basename='dndweb2'>
        <div>
        <Header />
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/home"} component={Home}/>
            <Route path={"/race"} component={Race}/>
            <Route path={"/class"} component={ClassScreen}/>
            <Route path={"/stats"} component={Stats}/>
            <Route path={"/bio"} component={Bio}/>
            <Route path={"/alignment"} component={Align}/>
            <Route path={"/weapons"} component={Weapons}/>
            <Route path={"/armor"} component={Armor}/>
            <Route path={"/other"} component={Other}/>
            <Route path={"/spells"} component={Spells}/>
            <Route path={"/overview"} component={Overview}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
