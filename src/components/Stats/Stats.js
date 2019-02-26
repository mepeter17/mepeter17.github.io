import React, { Component } from 'react';
import './Stats.css'
import Footer from '../Footer/Footer'
import { DropdownButton, Dropdown  } from 'react-bootstrap';
import CommonDataManager from '../CommonDataManager';
import Tabs from '../Tabs/Tabs'

class Stats extends Component
{
  constructor(props)
  {
    super(props);
    this.toggle = this.toggle.bind(this);
    let commonData = CommonDataManager.getInstance();

    if(commonData.getStats() === "empty")
    {
        this.stats = this.generate_stats();

    }
    else
    {
        this.stats = commonData.getStats();
    }
    this.cats =  [{s:"Str",v:"-"}, {s:"Dex",v:"-"}, {s:"Con",v:"-"}, {s:"Wis",v:"-"}, {s:"Int",v:"-"}, {s:"Cha",v:"-"}];
    if(commonData.getCats() !== "empty")
    {
        this.cats = commonData.getCats();
    }

    this.state = {
      dropdownOpen: false,
      cats: this.cats,
      list: this.stats
    };
    if(this.state.list[0] !== '-')
      this.state.list.unshift('-');
    commonData.setStats(this.state.list);
    commonData.setCats(this.state.cats);
  }

  toggle()
  {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generate_stats = () =>
  {
      var s = [];
      for(var i=0;i<6;i++)
      {
        s.push(this.generate_one_stat());
      }
      s.sort((a, b) => b - a);
      return s;
  }

  generate_one_stat = () =>
  {
    var lowest = 20;
    var total = 0;
    for(var i=0; i<4;i++)
    {
      var current_roll = Math.ceil(Math.random() * 6);
      if(current_roll < lowest)
      {
          lowest = current_roll;
      }
      total += current_roll;
    }
    return total-lowest;
  }


  handleChange = (stat) =>
  {
      this.setState()
  }

  pick_stat2 = (number, stat_name) =>
  {

  }

  pick_stat = (number, stat_name) =>
  {
    if(number === "-"){
      this.set_stat_with_return(stat_name, number);
    }
    else
    {
      var new_list = this.state.list;
      for(var i=0;i<this.state.list.length;i++)
      {
        if(new_list[i] === number)
        {
          new_list.splice(i,1);
          this.setState({list: new_list})
          this.set_stat_with_return(stat_name,number);
          return;
        }
      }
    }
  }

  set_stat_with_return = (stat_name,number) =>
  {
    var new_list = this.state.cats;
    for(var i=0;i<new_list.length;i++)
    {
      var current_stat_name = new_list[i]["s"];
      if(current_stat_name === stat_name)
      {
          var old_number = new_list[i]["v"];
          if(old_number !== "-")
          {
              var available_stats = this.state.list;
              available_stats.push(old_number);
              this.setState({list:available_stats});
          }
          new_list[i]["v"] = number;
          this.setState({cats: new_list});
      }
    }
    this.state.list.sort(function(a, b){
      if(a === '-')
        return -1;
      else if(b === '-')
        return 1;
      else
        return b-a
    });
  }

  display(p)
  {
    if(p === '- ')
      return "";
    else
      return p;
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <Tabs value='stats'/>

        <div className='m'>
          <button class='tab tab2 tab3 tab_block tab_shift'></button>
          <div className="button_side">
            <h1><b1>Stats</b1></h1>
            <h3><b3>Randomly Generated Stats:</b3></h3>
            <a1><p>&nbsp;&nbsp;Remaining: {(this.state.list).map(p => this.display(p + ' '))}</p></a1>
            <ul>
            {
              (this.state.cats).map(p =>

                <a1><ul key={p['s']}>
                  <div className='lr' >
                    <div className='ten'>{p['s']}</div>
                      <DropdownButton className="drop_style" variant='danger' title={p['v']}>
                        {this.state.list.map(number =>
                            <Dropdown.Item>
                              <div onClick={()=>this.pick_stat(number, p['s'])}> {number} </div>
                            </Dropdown.Item>)}
                        </DropdownButton>
                  </div>
                </ul></a1>
            )
            }
            </ul>
          </div>

          <div className="desc_side">
            <h3><b3>Race: </b3><a1>{CommonDataManager.gi()._race}</a1><b3>&nbsp;&nbsp;&nbsp;Class: </b3><a1>{CommonDataManager.gi()._class}</a1></h3>
            <h3><b3>Racial Bonuses:</b3></h3>
            <p><a1>&nbsp;&nbsp;{CommonDataManager.gi()._race_bonuses}</a1></p>
            <h3><b3>Important for Class:</b3></h3>
            <p><a1>&nbsp;&nbsp;{CommonDataManager.gi()._important_stats}</a1></p>
            <h3><b3>Recommended Stats:</b3></h3>
            <p><a1>&nbsp;&nbsp;{CommonDataManager.gi()._recommended_stats}</a1></p>
            <h3><b3>Alternative Stats:</b3></h3>
            <p><a1>{CommonDataManager.gi()._alternative_stats.map(p => <ul key={p}>&nbsp;&nbsp;{p}</ul>)}</a1></p>
          </div>
        </div>
      </div>
      <Footer prev="/class" next='/bio' />
    </div>
    );
  }
}

export default Stats;
