import React, { Component } from 'react';
import './App.css';
import MainFrame from './MainFrame/MainFrame.js';
import ButtonFrame from './ButtonFrame/ButtonFrame.js';
import OutputFrame from './OutputFrame/OutputFrame.js';
import users from './users.json';
import underscore from 'underscore';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = { loadData: false, showRefresh: false, startGame: false, usr: [], shuffledusers: [] }
    }

    loadDataCb = () => {
        this.setState({ loadData: true, usr: users.users });
    }

    needRefresh = () => {
        let shuffledusers = underscore.shuffle(this.state.usr);
        this.setState({ shuffledusers });
    }

    startGame = () => {
        let shuffledusers = underscore.shuffle(this.state.usr);
        this.setState({ startGame: true, shuffledusers, showRefresh: true });
    }

    render() {
        return (
        <div style={{width: '100%', height: 500}}>
            <MainFrame loadDataCb={this.loadDataCb} loadData={this.state.loadData} 
             users={this.state.usr} />
            <ButtonFrame loadData={this.state.loadData}
             showRefresh={this.state.showRefresh} 
             needRefresh={this.needRefresh}
             startGame={this.startGame} /> 
             <OutputFrame shuffledusers={this.state.shuffledusers}/>
        </div>
        );
    }
}

export default Container;
