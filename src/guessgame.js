import React, { Component } from 'react';
import "./projects.css"

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hour: new Date().getHours().toLocaleString(),
        minutes: new Date().getMinutes().toLocaleString(),
        seconds: new Date().getSeconds().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        hour: new Date().getHours().toLocaleString(),
        minutes: new Date().getMinutes().toLocaleString(),
        seconds: new Date().getSeconds().toLocaleString() 
      });
    }
    render() {
      return (
          <div>
              <h1>--------------------APP #3--------------------</h1>
        <p className="App-clock">
         <button className="button">{this.state.hour}<h1>HOURS</h1></button>
         <button className="button">{this.state.minutes}<h1>MINUTES</h1></button>
         <button className="buttona">{this.state.seconds}<h1>SECONDS</h1></button>
        </p>
        </div>
      );
    }
  }
export default Game;