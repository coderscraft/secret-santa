import React, { Component } from 'react';
import './../App.css';
import arrow from './../arrow.png';
import wall3 from './../wall3.jpg';

class OutputFrame extends Component {


  getList = (firstUser) => {
      let {shuffledusers} = this.props
      let size = shuffledusers.length
        return <div>{
            shuffledusers.map((u, i) => 
                <div key={u.guid}>{shuffledusers[i].email}  <img src={arrow} class="Arrow" alt=""/>  {shuffledusers[(i+1)%size].email}</div> 
            )
        }</div>
    }
    
  render() {
    let firstUser = this.props.shuffledusers[0];
    return (
        <div style={{ backgroundImage: "url(" + wall3 + ")", float: 'left', width: '50%', height: '100%' }}>
        <br />
            {this.getList(firstUser)}
        </div>
    );
  }
}

export default OutputFrame;
