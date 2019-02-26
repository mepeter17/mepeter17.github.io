import React, { Component } from 'react';
import './RaceInfo.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs.js'
import CommonDataManager from '../CommonDataManager';

class RaceInfo extends Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      race: "Race",
      bonuses: "",
      languages: "",
      other: "",
      desc: ""
    };
  }

  left_list = [ "Dwarf", "Elf", "Halfling", "Human", "Dragonborn"];
  right_list = ["Gnome", "Half-Elf", "Half-Orc", "Tiefling"];

  readTextFile = file => {
    var allText;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if(rawFile.readyState === 4){
        if(rawFile.status === 200 || rawFile.status === 0){
          allText = rawFile.responseText;
        }
      }
    };
    rawFile.send(null);

    return allText;
  }

  loadState(race)
  {
    var traits = this.readTextFile("./../info/races/" + race + "/traits.txt").split("\r\n");
    var desc = this.readTextFile("./../info/races/" + race + "/description1.txt").split("\r\n");
    var bonus, lang;
    var other = "";

    for(var i = 0; i < traits.length; i++)
    {
      var category = traits[i].split(":")[0];
      var content = traits[i].split(":")[1].trim();
      if(category === "Ability Score")
      {
        bonus = content;
      }
      else if(category === "Languages")
      {
        lang = content;
      }
      else if(category === "Racial Abilities")
      {
        for(var j = 0; j < content; j++)
        {
          if(other.length === 0)
            other = traits[++i].split(":")[0];
          else
            other = other + ", " + traits[++i].split(":")[0];
        }
        break;
      }
    }

    this.setState(
    {
      race: race,
      bonuses: bonus,
      languages: lang,
      other: other,
      desc: desc
    });

    let cd = CommonDataManager.getInstance();
    cd._languages = lang;
    cd._race_bonuses = bonus;
  }

  ButtonClick(next_race)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._race !== null)
      document.getElementById(commonData._race).setAttribute("class", "button_class");
    commonData._race = next_race;
    document.getElementById(next_race).setAttribute("class", "button_persist");

    this.loadState(next_race);
  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._race !== null){
      this.ButtonClick(commonData._race);
      document.getElementById(commonData._race).setAttribute("class", "button_persist");
    }
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <Tabs value='race'/>
        <div className='m'>
          <button class ='tab tab_block tab_shift'></button>
          <div className='button_side'>
            <h1><b1>Race Selection</b1></h1>
            <h3><b3>Choose a Race:</b3></h3>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h2><b2>{this.state.race}</b2></h2>
                <h3><b3>Race Bonuses:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.bonuses}</a1>
                <h3><b3>Languages:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.languages}</a1>
                <h3><b3>Racial Abilities:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.other}</a1>
              </div>

              <div className='right'>
                <img src={require("../../photos/" + this.state.race + ".png")} alt={this.state.race} class='picture_race' />
              </div>
            </div>

            <div className='bottom'>
              <h3><b3>Description:</b3></h3>
              <a1>&nbsp;&nbsp;{this.state.desc}</a1>
            </div>
          </div>

        </div>
      </div>
      <Footer prev="/home" next='/class'/>
    </div>
    );
  }

}

export default RaceInfo;
