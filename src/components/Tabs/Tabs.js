import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './tabs.css';

class Tabs extends Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      race: false,
      class: false,
      stats: false,
      bio: false,
      align: false,
      weapons: false,
      armor: false,
      other: false,
      spells: false,
      overview: false
    };

    /*switch(props.value)
    {
        case "race":
        this.state.race = true;
        break;
        case "class":
        this.state.class = true;
        break;
        case "stats":
        this.state.stats = true;
        break;
        case "bio":
        this.state.bio = true;
        break;
        case "alignment":
        this.state.alignment = true;
        break;
        case "weapons":
        this.state.weapons = true;
        break;
        case "armor":
        this.state.armor = true;
        break;
        case "other":
        this.state.other = true;
        break;
        case "spells":
        this.state.spells = true;
        break;
    }*/
    this.state[props.value] = true;
  }

  isc = (value) =>
  {
      if(this.state[value])
      {
        return ' tab_current';
      }
      else
      {
        return ' ';
      }
  }
  render()
  {
    return (
        <div className='tabs'>
          <ul>
            <li> <Link to={"/race"}>
            <button className={'tab ' + this.isc('race')}>Race</button> </Link> </li>
            <li> <Link to={"/class"}>
            <button className={'tab tab2 ' + this.isc('class')}>Class</button> </Link> </li>
            <li> <Link to={"/stats"}>
            <button className={'tab tab3' + this.isc('stats')}>Stats</button> </Link> </li>
            <li> <Link to={"/bio"}>
            <button className={'tab tab4' + this.isc('bio')}>Bio</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button className={'tab tab5' + this.isc('alignment')}>Alignment</button> </Link> </li>
            <li> <Link to={"/weapons"}>
            <button className={'tab tab6' + this.isc('weapons')}>Weapons</button> </Link> </li>
            <li> <Link to={"/armor"}>
            <button className={'tab tab7' + this.isc('armor')}>Armor</button> </Link> </li>
            <li> <Link to={"/spells"}>
            <button className={'tab tab8' + this.isc('spells')}>Spells</button> </Link> </li>
            <li> <Link to={"/overview"}>
            <button className={'tab tab9' + this.isc('overview')}>Overview</button> </Link> </li>
          </ul>
        </div>

    );
  }

}

export default Tabs;
