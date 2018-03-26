import React, { Component } from 'react';
import './../App.css';
import wall2 from './../wall2.jpg';

class MainFrame extends Component {


  getList = () => {
    return <div>{this.props.users.map((u) => <div key={u.guid}>{u.email}</div> )}</div>
  }

  render() {
      let { loadDataCb, loadData } = this.props;
    return (
        <div style={{ width: '25%', backgroundImage: "url(" + wall2 + ")", float: 'left', height: '100%'}}>    
            <br />
            <button class='mybutton' onClick={loadDataCb}>Load Data</button><br /><br />
            <div style={{'text-align': 'left', padding:'20px', 'font-size':'17px'}}><b>
                { loadData ?  'Loading data from user.json file...' : null}<br /><br />
                { loadData ?  this.getList() : null }</b>
            </div>
        </div>
    );
  }
}

export default MainFrame;
