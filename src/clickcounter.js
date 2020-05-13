import React, { Component } from 'react';
import './projects.css'

class Counter2 extends Component {
  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  addcount(){
    this.setState({
      count: this.state.count+1
    })
  }
  delcount(){
    this.setState({
      count: this.state.count-1
    })
  }
  resetcount(){
    this.setState({
      count: 0
    })
  }

  render() {
    return (
        <div>
          <h1>----------APP #1----------</h1>
          <button className="but1">{this.state.count}</button><br/>
          <button className="but2" onClick={() =>this.addcount()}>ADD</button>
          <button className="but2" onClick={() =>this.delcount()}>DELETE</button>
          <button className="but2" onClick={() =>this.resetcount()}>RESET</button>
        </div>
    )
  }
}

export default Counter2;