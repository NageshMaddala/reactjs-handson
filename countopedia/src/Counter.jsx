import React from "react";
import attack from "./images/attack.png";
import defence from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    // this.handleRandom = this.handleRandom.bind(this);

    // state is a reserved word in react
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }

  handleAttack() {
    // alert("Attack clicked");
    // this .setState is asynchronous function so always use the callback function or arrow function
    // that would make it synchronous
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 10});

    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        gameStatus: newCount > 10 ? "You won!" :  prevState.gameStatus,
      };
    });
  }

  handleDefence() {
    this.setState((prevState) => {
      let newCount = prevState.count - Math.round(Math.random() * 10);
      return { count: newCount,
        gameStatus: newCount < -10 ? "You lost!" : prevState.gameStatus,
       };
    });
  }

  // you don't need to bind this function in the constructor
  // because it is using arrow function
  // but you can bind it in the constructor if you want to
  handleRandom = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
      // this.setState({ lastPlay: "Attack" });
    } else {
      this.handleDefence();
      // this.setState({ lastPlay: "Defence" });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="row text-white">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status: {this.state.gameStatus} </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attack}
            alt="Game Status"
            className="p-4 rounded"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={defence}
            alt="Game Status"
            className="p-4 rounded"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandom}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
