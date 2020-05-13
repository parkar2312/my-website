import React, { Component } from 'react';
import './App.css';
import Counter2 from './clickcounter';
import Addition from './adder';
import Game from './guessgame'
import Memo from './basicmemo';
import Todoli from './todolist';
import Board from './trial.js';
import "./projects.css"


class Pro extends Component { 
  render() {
    return ( 
      <div className="pipipopo">
        <Counter2/>
        <Addition/>  
        <Game/>
        <Memo/>
        <Todoli/>
        <Board/>
       </div>
        )
  }
}
export default Pro;