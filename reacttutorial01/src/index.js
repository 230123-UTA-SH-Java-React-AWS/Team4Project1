import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    // {
    //   //value:v,
    // };
  }

  render() {
    return (
      <button className="square" onClick={() => { this.setState({ value: 'X' }) }}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-5">
          <label>Login</label>
          <input type="text" class="form-control" placeholder="Email" aria-label="Login" />
          <label>Password</label>
          <input type="text" class="form-control" placeholder="" aria-label="Password" />
          <br />
          <input type="button" class="btn btn-secondary btn-sm" value="Login" />
        </div>
      </div>
    )
  }
}

// ========================================
//here we render the components to the index.html
//const root = ReactDOM.createRoot(document.getElementById("root"));
const test1 = ReactDOM.createRoot(document.getElementById("test1"));

//test1.render(<Game />);

test1.render(<Login />);


