import React, { Component } from 'react';

class Addition extends Component {
  
      constructor(props){
          super(props)
          this.state={
              num1: '', 
              num2: '',
              added: '',
          }
      }
      addnums(){
          this.setState({
        added:parseInt(this.state.num1) + parseInt(this.state.num2),
    })
      }
      subnums(){
        this.setState({
      added:parseInt(this.state.num1) - parseInt(this.state.num2),
  })
    }
    mulnums(){
      this.setState({
    added:parseInt(this.state.num1) * parseInt(this.state.num2),
})
  }
  divnums(){
    this.setState({
  added:parseInt(this.state.num1) / parseInt(this.state.num2),
})
}

clrnums(){
  this.setState({
    num1:0,
    num2:0,
    added:0
  })
}
sqrnums(){
  this.setState({
    added:parseInt(this.state.num1) * parseInt(this.state.num1),
  })
}
      render() {
        console.log(this.state.num1)
        console.log(this.state.num2)
        console.log(this.state.added)
    return ( 
        <div className="app2">
          <h1>--------------------APP #2--------------------</h1>
        <input type="text" className="inp1" id="num1" placeholder="NUMBER A" value={this.state.num1} onChange={ (eve) => {this.setState({num1: eve.target.value})}}/>
        <input type="text" className="inp1" id="num2" placeholder="NUMBER B" value={this.state.num2} onChange={ (eve) => {this.setState({num2: eve.target.value})}}/><br/>
        <button className="addb" onClick={() =>this.addnums()}>+</button>
        <button className="addb" onClick={() =>this.subnums()}>-</button>
        <button className="addb" onClick={() =>this.divnums()}>/</button>
        <button className="addb" onClick={() =>this.mulnums()}>*</button><br/>
        <button className="addd" onClick={() =>this.clrnums()}>CLEAR</button>
        <button className="adddd" onClick={() =>this.sqrnums()}>square</button><br/>
        <input  className="addc" type="text" value={this.state.added} placeholder=" RESULT IS" />
        </div>
        )
  }
}
export default Addition;