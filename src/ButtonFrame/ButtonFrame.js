import React, { Component } from 'react';
import './../App.css';
import refresh from './../refresh.png';
import wall1 from './../wall1.jpg';

class ButtonFrame extends Component {
  render() {
    let { loadData, showRefresh, needRefresh, startGame } = this.props;
    return (
      <div style={{ backgroundImage: "url(" + wall1 + ")", float: 'left', width: '25%', height: '100%' }}>
          <br />
          {showRefresh ? <img src={refresh} class="Refresh" alt="" onClick={ needRefresh } />: null} 
          {loadData && showRefresh === false ? <button onClick={startGame} class="mybutton" style={{'vertical-align':'middle'}}>Start Game!</button> : null} 
     </div>
    );
  }
}

export default ButtonFrame;
