import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';
import './Weapons.css';


class Weapons extends React.Component
{

  constructor(props)
  {
    super(props);
    let cd = CommonDataManager.getInstance();
    var init_a = cd._available_weapons;
    var init_p = cd._purchased_weapons;
    this.state =
    {
      available: this.real_a,
      purchased: init_p,
      selected: null,
      gold: cd._gold
    }
  }
  //{name: "Weapon ", price: 111, desc: "description"},

  real_a = [
    {name: "Greataxe ", price: 30, desc: "1d12 slashing 7 lb. Heavy, two-handed"},
  {name: "Greatsword  ", price: 50 , desc: "2d6 slashing 6 lb. Heavy, two-handed"},
  {name: "Halberd  ", price: 20, desc: "1d10 slashing 6 lb. Heavy, reach, two-handed"},
  {name: "Lance", price: 10, desc: "1d12 piercing 6 lb. Reach, special"},
  {name: "Longsword ", price: 15, desc: "1d8 slashing 3 lb. Versatile (1d10)"},
  {name: "Maul", price: 10, desc: "2d6 bludgeoning 10 lb. Heavy, two-handed"},
  {name: "Morningstar ", price: 15, desc: "1d8 piercing 4 lb. —"},

  {name: "Rapier ", price: 25, desc: "1d8 piercing 2 lb. Finesse"},

  {name: "Longbow  ", price: 50, desc: "1d8 piercing 2 lb. Ammunition (range 150/600), heavy, two-handed"},
  {name: "Crossbow, hand", price: 75, desc: "1d6 piercing 3 lb. Ammunition (range 30/120), light, loading"},
    {name: "Crossbow, light ", price: 25, desc: "1d8 piercing 5 lb. Ammunition (range 80/320), loading, two-handed"},
  {name: "Crossbow, heavy", price: 50, desc: "1d10 piercing 18 lb. Ammunition (range 100/400), heavy, loading, two-handed"},

    {name: "Light hammer ", price: 2, desc: "1d4 bludgeoning 2 lb. Light, thrown (range 20/60)"},

    {name: "Battleaxe ", price: 10, desc: "1d8 slashing 4 lb. Versatile (1d10)"},
    {name: "Flail ", price: 20, desc: "1d8 bludgeoning 2 lb."},
    {name: "Glaive ", price: 111, desc: "1d10 slashing 6 lb. Heavy, reach, two-handed"},
    {name: "Club ", price: 1, desc: "1d4 bludgeoning 2 lb. Light"},
    {name: "Dagger ", price: 1, desc: "1d4 piercing 1 lb. Finesse, light, thrown (range 20/60)"},
    {name: "Greatclub ", price: 1, desc: "1d8 bludgeoning 10 lb. Two-handed"},
    {name: "Handaxe ", price: 5, desc: "1d6 slashing 2 lb. Light, thrown (range 20/60)"},
    {name: "Javelin ", price: 5, desc: "1d6 piercing 2 lb. Thrown (range 30/120)"}
  ]

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
      cd._purchased_weapons = new_purchased;
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
          cd._purchased_weapons = new_purchased;
          return;
        }
      }
  }


  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='weapons'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab6 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Weapons</b1></h1>
              <h3><b3>Buy Weapons: {this.state.gold + " gold remaining"}</b3></h3>
                <a1>&nbsp;&nbsp;&nbsp;&nbsp;{'Available:'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {'Purchased:'}</a1>
                <div className='lr'>
                    <div className='ScrollList' name="Available">
                    <ul>{this.state.available.map(p => <ul key={p}><button class='button_equip'  id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></ul>)} </ul>
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
      <Footer prev="/alignment" next='/armor' />
    </div>
    );
  }
}

export default Weapons;
