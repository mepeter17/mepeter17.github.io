import React from 'react';
import './ClassScreen.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';

class ClassScreen extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      class: "Class",
      important_stats: "",
      base_health: "",
      skills: "",
      choose: "",
      desc: ""
    }
    this.render();
    this.ButtonClick = this.ButtonClick.bind(this);
    this.child = React.createRef();
  }

  left_list = [ "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk"];
  right_list = ["Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

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

  loadState(c)
  {
    var base = this.readTextFile("./../info/classes/" + c + "/base.txt").split("\r\n");
    var desc = this.readTextFile("./../info/classes/" + c + "/description1.txt").split("\r\n");
    var abil, hit;
    var skills = "", choose = "", recom = "", alterArray = [];

    for(var i = 0; i < base.length; i++)
    {
      var category = base[i].split(":")[0];
      var content = base[i].split(":")[1].trim();
      if(category === "Ability Scores")
      {
        abil = content;
      }
      else if(category === "Hit Dice")
      {
        hit = content.split("d")[1];
        if(hit === "6")
          hit += " (low)";
        else if(hit === "8")
          hit += " (medium)";
        else if(hit === "10")
          hit += " (high)";
        else if(hit === "12")
          hit += " (very high)";
      }
      else if(category === "Skills")
      {
        skills = content;
        if(base[i].split(":").length === 3)
          choose = "Choose " + base[i].split(":")[2];
      }
      else if(category === "Recommended Stat Order")
      {
        if(content.split(")").length > 1){
          recom += content.split(")")[0].trim() + ") ";
          content = content.split(")")[1].trim();
        }
        var st = content.split(", ");
        for(var s of st)
        {
          recom += s.substring(0, 3);
          if(s !== st[st.length-1])
            recom += " > ";
        }
      }
      else if(category === "Alternative Stat Order")
      {
        var alter = "";
        if(content === "none")
        {
          alter = "None";
          alterArray.push(alter);
          continue;
        }
        for(var j = 1; j < base[i].split(":").length; j++)
        {
          content = base[i].split(":")[j].trim();
          if(content.split(")").length > 1){
            alter += content.split(")")[0].trim() + ") ";
            content = content.split(")")[1].trim();
          }
          var st = content.split(", ");
          for(var s of st)
          {
            alter += s.substring(0, 3);
            if(s !== st[st.length-1])
              alter += " > ";
          }
          alterArray.push(alter);
          alter = "";
        }
      }
    }

    this.setState(
    {
      class: c,
      important_stats: abil,
      base_health: hit,
      skills: skills,
      choose: choose,
      desc: desc
    });

    CommonDataManager.gi()._important_stats = abil;
    CommonDataManager.gi()._recommended_stats = recom;
    CommonDataManager.gi()._alternative_stats = alterArray;
  }

  ButtonClick(new_class)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._class !== null)
      document.getElementById(commonData._class).setAttribute("class", "button_class");
    commonData._class = new_class;
    document.getElementById(new_class).setAttribute("class", "button_persist");

    this.loadState(new_class);
  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._class !== null){
      this.ButtonClick(commonData._class);
      document.getElementById(commonData._class).setAttribute("class", "button_persist");
    }
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
      <Tabs value='class'/>
        <div className='m'>
          <button class='tab tab2 tab_block'></button>
          <div className='button_side'>
            <h1><b1>Class Selection</b1></h1>
            <h3><b3>Choose a Class:</b3></h3>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h2><b2>{this.state.class}</b2></h2>
                <h3><b3>Important Stats:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.important_stats}</a1>
                <h3><b3>Base Health:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.base_health}</a1>
                <h3><b3>Skills: {this.state.choose}</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.skills}</a1>
              </div>

              <div className='right'>
                <img src={require("../../photos/" + this.state.class + ".png")} alt={this.state.class} class="picture" />
              </div>
            </div>

            <div className='bottom'>
              <h3><b3>Description:</b3></h3>
              <a1>&nbsp;&nbsp;{this.state.desc}</a1>
            </div>
          </div>

        </div>
      </div>
      <Footer prev="/race" next='/stats'/>
    </div>
    );
  }
}

export default ClassScreen;
