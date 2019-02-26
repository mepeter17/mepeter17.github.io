import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';
import './Weapons.css';


class Armor extends React.Component
{

  constructor(props)
  {
    super(props);
    let cd = CommonDataManager.getInstance();
    var init_a = cd._available_armor;
    var init_p = cd._purchased_armor;
    this.state =
    {
      available: this.real_a,
      purchased: init_p,
      selected: null,
      gold: cd._gold
    }
  }
//{name: "Armor ", price: 111, desc: "description"},
  real_a = [
{name: "Padded  ", price: 5, desc: "11 + Dex modifier — Disadvantage 8 lb."},
{name: "Leather  ", price: 10, desc: "11 + Dex modifier — — 10 lb."},
{name: "Studded leather  ", price: 45, desc: "12 + Dex modifier — — 13 lb."},
{name: "Hide", price: 10, desc: "12 + Dex modifier (max 2) — — 12 lb."},
{name: "Chain shirt ", price: 50, desc: "13 + Dex modifier (max 2) — — 20 lb."},
{name: "Scale mail ", price: 50, desc: "14 + Dex modifier (max 2) — Disadvantage 45 lb."},
{name: "Breastplate", price: 400, desc: "14 + Dex modifier (max 2) — — 20 lb."},
{name: "Half plate ", price: 111, desc: "15 + Dex modifier (max 2) — Disadvantage 40 lb."},
{name: "Ring mail ", price: 30, desc: "14 — Disadvantage 40 lb."},
{name: "Chain mail", price: 75, desc: "16 Str 13 Disadvantage 55 lb."},
{name: "Splint", price: 200, desc: "17 Str 15 Disadvantage 60 lb."},
{name: "Plate", price: 1500, desc: "18 Str 15 Disadvantage 65 lb."},
{name: "*Shield  ", price: 10, desc: "+2 — — 6 lb."},


  ];

  set_selected(item)
  {
      this.setState({selected: item});
  }


  buy()
  {
      if(this.state.selected === null) return;
      let cd = CommonDataManager.getInstance();

      if(cd._gold < this.state.selected['price'])
        return;

      var new_purchased = this.state.purchased;
      new_purchased.push(this.state.selected);
      cd._gold -= this.state.selected['price'];

      this.setState({purchased: new_purchased, gold: cd._gold});
      cd._purchased_armor = new_purchased;
  }

  sell()
  {
      if(this.state.selected === null) return;
      var new_purchased = this.state.purchased
      for(var i=0; i<new_purchased.length; i++)
      {
        if(this.state.selected === new_purchased[i])
        {
          let cd = CommonDataManager.getInstance();
          new_purchased.splice(i,1);
          cd._gold += this.state.selected['price'];

          this.setState({purchased: new_purchased, gold: cd._gold});
          cd._purchased_armor = new_purchased;
          return;
        }
      }
  }


  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='armor'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab6 tab7 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Armor</b1></h1>
              <h3><b3>Buy Armor: {this.state.gold + " gold remaining"}</b3></h3>
                <a1>&nbsp;&nbsp;&nbsp;&nbsp;{'Available:'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {'Purchased:'}</a1>
                <div className='lr'>
                    <div className='ScrollList' name="Available">
                        <ul>{this.state.available.map(p => <ul key={p}><button class='button_equip' id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></ul>)} </ul>
                    </div>
                    <div className='ud' name="Buttons">
                      <button class='button_buy' onClick={()=>this.buy()}><buy>Buy</buy></button>
                      <button class='button_buy' onClick={()=>this.sell()}><buy>Sell</buy></button>
                    </div>
                    <div className='ScrollList' name="Purchased">
                      <ul>{this.state.purchased.map(p => <ul key={p}><button class='button_equip' id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></ul>)} </ul>
                    </div>
                </div>
            </div>
          </div>

          <div className='right'>
            <h3><b3>Description: { this.state.selected ? ( this.state.selected['name'] ) : ("" )}</b3></h3>
            <a1>&nbsp;&nbsp;{ this.state.selected ? ( this.state.selected['desc'] ) : ("none" )}</a1>
          </div>


        </div>
        </div>
      </div>
      <Footer prev="/weapons" next='/spells' />
    </div>
    );
  }
}

export default Armor;
