import React from 'react';
import './Bio.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';


class Align extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      alignment: "No alignment selected",
      desc: ""
    }
    this.render();
    this.ButtonClick = this.ButtonClick.bind(this);
    this.child = React.createRef();
  }

  ButtonClick(new_align)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._alignment !== null)
      document.getElementById(commonData._alignment).setAttribute("class", "button_class_bio");
    commonData._alignment = new_align;
    document.getElementById(new_align).setAttribute("class", "button_persist_align");

    var new_desc = this.get_description(new_align);
    this.setState({
      alignment: new_align,
      desc: new_desc
    });

  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._alignment !== null){
      this.ButtonClick(commonData._alignment);
      document.getElementById(commonData._alignment).setAttribute("class", "button_persist_align");
    }
  }

  get_description(target_align)
  {
    switch(target_align)
    {
        case "Lawful Good": return "Lawful good creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.";
        case "Neutral Good": return "Neutral good folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.";
        case "Chaotic Good": return "Chaotic good creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.";
        case "Lawful Neutral": return "Lawful neutral individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.";
        case "True Neutral": return "Neutral is the alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.";
        case "Chaotic Neutral": return "Chaotic neutral creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.";
        case "Lawful Evil": return "Lawful evil creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.";
        case "Neutral Evil": return "Neutral evil is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and yugoloths are neutral evil.";
        case "Chaotic Evil": return "Chaotic evil creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.";
    }
    return "woops";
  }

  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='alignment'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Alignment</b1></h1>
              <h3><b3>Select Alignment:</b3></h3>
              <table id="simple-board">
                 <tbody>
                    <tr id="row0">
                      <td id="cell0-0"><bio2><button className='button_class_bio' id='Lawful Good' onClick={()=>this.ButtonClick('Lawful Good')}>Lawful Good</button></bio2></td>
                      <td id="cell0-1"><bio2><button className='button_class_bio' id='Neutral Good' onClick={()=>this.ButtonClick('Neutral Good')}>Neutral Good</button></bio2></td>
                      <td id="cell0-2"><bio2><button className='button_class_bio' id='Chaotic Good' onClick={()=>this.ButtonClick('Chaotic Good')}>Chaotic Good</button></bio2></td>
                    </tr>
                    <tr id="row1">
                      <td id="cell1-0"><bio2><button className='button_class_bio' id='Lawful Neutral' onClick={()=>this.ButtonClick('Lawful Neutral')}>Lawful Neutral</button></bio2></td>
                      <td id="cell1-1"><bio2><button className='button_class_bio' id='True Neutral' onClick={()=>this.ButtonClick('True Neutral')}>True Neutral</button></bio2></td>
                      <td id="cell1-2"><bio2><button className='button_class_bio' id='Chaotic Neutral' onClick={()=>this.ButtonClick('Chaotic Neutral')}>Chaotic Neutral</button></bio2></td>
                    </tr>
                    <tr id="row2">
                      <td id="cell2-0"><bio2><button className='button_class_bio' id='Lawful Evil' onClick={()=>this.ButtonClick('Lawful Evil')}>Lawful Evil</button></bio2></td>
                      <td id="cell2-1"><bio2><button className='button_class_bio' id='Neutral Evil' onClick={()=>this.ButtonClick('Neutral Evil')}>Neutral Evil</button></bio2></td>
                      <td id="cell2-2"><bio2><button className='button_class_bio' id='Chaotic Evil' onClick={()=>this.ButtonClick('Chaotic Evil')}>Chaotic Evil</button></bio2></td>
                    </tr>
                 </tbody>
               </table>
            </div>
          </div>

          <div className='right'>
            <h3><b3>{this.state.alignment}</b3></h3>
            <a1>&nbsp;&nbsp;{this.state.desc}</a1>
          </div>


        </div>
        </div>
      </div>
      <Footer prev="/bio" next='/weapons' />
    </div>
    );
  }
}

export default Align;
