import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//---------------TicTacToe Tutorial---------------------------

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


//---------------TicTacToe Tutorial---------------------------


class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-5">
          <label>Login</label>
          <input type="text" className="form-control" placeholder="Email" aria-label="Login" />
          <label>Password</label>
          <input type="text" className="form-control" placeholder="" aria-label="Password" />
          <br />
          <input type="button" className="btn btn-secondary btn-sm" value="Login" />
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <a>Home</a>
      </div>
    )
  }
}

class Account extends React.Component {
  render() {
    return (
      <div>
        <a>Account Info</a>
      </div>
    )
  }
}

class History extends React.Component {
  render() {
    return (
      <div>
        <a>Transaction History</a>
      </div>
    )
  }
}

class Transfer extends React.Component {
  render() {
    return (
      <div>
        <a>Transfer</a>
      </div>
    )
  }
}
class Register extends React.Component {
  render() {
    return (
      <div>
        <a>Register</a>
      </div>
    )
  }
}



// ========================================
//here we render the components to the index.html


const test1 = ReactDOM.createRoot(document.getElementById("test1"));
const test2 = ReactDOM.createRoot(document.getElementById("test2"));

//test1.render(<Game />);

//On the main landing page we have 2 columns
//column 1 is the login component
test1.render(<Login />);

//column 2 will hold the component corresponding to the link clicked on the nav bar
 test2.render(<Home />);
// test2.render(<Account />);
// test2.render(<History />);
// test2.render(<Transfer />);
// test2.render(<Register />);


