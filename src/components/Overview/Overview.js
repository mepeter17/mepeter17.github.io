import React from 'react';
import './Overview.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';

class Overview extends React.Component
{

  constructor(props)
  {
    //let cd = CommonDataManager.getInstance();
    //this.state.cd = cd;
    super(props);
  }


  stats(name)
  {
      if(CommonDataManager.gi()._stats === "empty")
        return "??";
        console.log("STATS" + CommonDataManager.gi()._cats);
      for(var i=0; i<CommonDataManager.gi()._cats.length;i++)
      {

        var current_stat = CommonDataManager.gi()._cats[i];
        if(current_stat['s'] === name)
        {
          if(current_stat['v'] === '-')
            return "??";
          else
            return current_stat['v'];
        }
      }
      return "WHAT";
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
      <Tabs value='overview'/>
        <div className='m'>
        <button class='tab tab2 tab3 tab4 tab5 tab6 tab7 tab8 tab9 tab_block'></button>
              <div className='overview'>
                <h1><b1>Overview</b1></h1>
                <h2><b2> { (CommonDataManager.gi()._name !== "") ? (CommonDataManager.gi()._name) : ("Character Name")} </b2></h2>
                <p><a1>&nbsp;{CommonDataManager.gi()._race + " " + CommonDataManager.gi()._class}</a1></p>
                <p><a1>&nbsp;Level 1</a1></p>
                <p><a1>&nbsp;{(CommonDataManager.gi()._alignment) ? (CommonDataManager.gi()._alignment) : ("????? Alignment")} </a1></p>

                <div className='lr_over' name='the rest'>
                    <div className='ud' name='bio_langauges'>
                      <h3><b2_5>Bio</b2_5></h3>
                      <p><a1>&nbsp;{(CommonDataManager.gi()._gender) ? (CommonDataManager.gi()._gender) : ("?? Gender")}</a1></p>
                      <p><a1>&nbsp;{(CommonDataManager.gi()._age !== "") ? (CommonDataManager.gi()._age) : ("??")} years old</a1></p>
                      <p><a1>&nbsp;{((CommonDataManager.gi()._ft !== "") ? (CommonDataManager.gi()._ft) : ("?")) + " ft " + ((CommonDataManager.gi()._in !== "") ? (CommonDataManager.gi()._in) : ("??")) + " in"}</a1></p>
                      <p><a1>&nbsp;{((CommonDataManager.gi()._lbs) ? (CommonDataManager.gi()._lbs) : ("???")) + " lbs"}</a1></p>
                      <h3><b3>Languages</b3></h3>
                      <p><a1>&nbsp;{CommonDataManager.gi()._languages}</a1></p>
                    </div>

                    <div className='ud' name='stats_combat'>
                    <div className='stats_over'>
                      <h3><b2_5>Stats</b2_5></h3>
                      <p><a1>&nbsp;Str: {this.stats("Str")}</a1></p>
                      <p><a1>&nbsp;Dex: {this.stats("Dex")}</a1></p>
                      <p><a1>&nbsp;Con: {this.stats("Con")}</a1></p>
                      <p><a1>&nbsp;Int: {this.stats("Int")}</a1></p>
                      <p><a1>&nbsp;Wis: {this.stats("Wis")}</a1></p>
                      <p><a1>&nbsp;Cha: {this.stats("Cha")}</a1></p>
                    </div>

                    </div>

                    <div className='equip_over'>
                    <div className='ud' name='equipment'>
                      <h3><b2_5>Equipment</b2_5></h3>
                      <h4><b3>Weapons</b3></h4>
                        <a1>{CommonDataManager.gi()._purchased_weapons.map(wep => <p>&nbsp;{wep['name']}</p>)}</a1>
                      <h4><b3>Armor</b3></h4>
                        <a1>{CommonDataManager.gi()._purchased_armor.map(wep => <p>&nbsp;{wep['name']}</p>)}</a1>
                    </div>
                    </div>

                    <div className='spells_over'>
                    <div className='ud' name='spells'>
                      <h3><b2_5>Spells</b2_5></h3>
                      <h4><b3>Level 0 (Cantrips)</b3></h4>
                        <a1>{CommonDataManager.gi()._spells0.map(wep => <p>&nbsp;{wep['name']}</p>)}</a1>
                      <h4><b3>Level 1</b3></h4>
                        <a1>{CommonDataManager.gi()._spells1.map(wep => <p>&nbsp;{wep['name']}</p>)}</a1>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
      </div>
      <Footer prev="/spells" next='/overview'/>
    </div>
    );
  }
}

export default Overview;
