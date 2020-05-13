import React, { Component } from 'react';
import './projects.css'
//class Memo extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state ={ random:0 ,
//       value:'',
//     numbers : ['choose','rock','paper','scissor']
//     };
//   }
//   handleClick(){
//     const min =1;
//     const max =4;
//     const rand = Math.floor(Math.random() *3 +1)
//     this.setState({ random: this.state.random + rand}
//       );
//       if (random>5){
        
//       }
//       if(this.state.value=this.state.random){
//         return alert("DRAW")
//       } else if ((this.state.value ===1 && this.state.random===3) ||
//                  (this.state.value ===2 && this.state.random===1) ||
//                   (this.state.value ===3 && this.state.random===2))
//                   {return alert("TOU WIN")}
//         else{
//           return alert("you loooooose")
//         }
//   }
//   reset(){
//     this.setState({
//       random:0
//     })
//   }
//   rocks(){
//     this.setState({value:1})}
//     papers(){
//       this.setState({value:2})}
//       scissors(){
//         this.setState({value:3})}
//   render() {
//     console.log(this.state.value)
                       
//     return ( 
//       <div>
//        <h1>APP #4</h1>
//        <button  onClick={() =>this.rocks()}>rock</button>
//        <button onClick={() =>this.papers()}>paper</button>
//        <button onClick={() =>this.scissors()}>scissor</button>
//        <button id="butta" onClick={this.handleClick.bind(this)}>click</button>
//        <button  onClick={() =>this.reset()}>reset</button>
//        <div>the number is {this.state.numbers[this.state.random]} </div>
//        </div>
//         )
//   }
// }
const weapons = ["rock", "paper", "scissors"];
class Memo extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return alert("Oops it's a Tie!");
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return alert("YOU Win!");
    } else {
      return alert("YOU looooooooose!");
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <><h1>----------APP #4----------</h1>
        <h4 style={{ textAlign: "center" }}>--Rock--Paper--Scissors--</h4>
        <div>
        -------------------------------------
          {/* <Player weapon={playerOne} /> */}<h2>Choose One</h2>
          ------------------------------------- <br/>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            Rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            Paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            Scissor
          </button><br/>
          -------------------------------------<br/>
         <div className="butt">{playerOne}</div> 
         -------------------------------------
        </div>
        <button type="button" className="weaponBtn1" onClick={this.startGame}>
          Start!
        </button><br/>
        -------------------------------------
        <div>
          {/* <Player weapon={playerTwo} /> */}<h2>Opponent Chose</h2> <br/>
          -------------------------------------
          <div className="butt">{playerTwo}</div> 
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
      </>
    );
  }
}

export default Memo;