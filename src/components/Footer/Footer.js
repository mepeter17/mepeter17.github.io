import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';


class Footer extends React.Component
{

  constructor(props)
  {
  	 super(props);
     this.prev = props.prev;
     this.next = props.next;

  }



  render()
  {
    return (
      <div className='foot'>
        <div className='prev'>
          <Link to={this.prev}><button className='b_prev button_foot_border button_prev_border'> </button></Link>
          <Link to={this.prev}><button className='b_prev button_foot button_prev'> </button></Link>
          <Link to={this.prev}><button className='b_prev button_foot_front_edge_border button_prev_front_edge_border'> </button></Link>
          <Link to={this.prev}><button className='b_prev button_foot_front_edge button_prev_front_edge'> </button></Link>
        </div>
        <div className='next'>
          <Link to={this.next}><button className='b_next button_foot_border button_next_border'> </button></Link>
          <Link to={this.next}><button className='b_next button_foot button_next'> </button></Link>
          <Link to={this.next}><button className='b_next button_foot_front_edge_border button_next_front_edge_border'> </button></Link>
          <Link to={this.next}><button className='b_next button_foot_front_edge button_next_front_edge'> </button></Link>
        </div>
      </div>
    );
  }
}

export default Footer;
