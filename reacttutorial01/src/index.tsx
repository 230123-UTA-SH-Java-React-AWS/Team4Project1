import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'

//---------------TicTacToe Tutorial---------------------------

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props;
//     // {
//     //   //value:v,
//     // };
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => { this.setState({ value: 'X' }) }}>
//         {this.state.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }


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

  testButton() {

  }
    render() {
    return (
      <><div>
        <a>Home</a>
      </div>
        <div>
          <button type="submit" className="btn btn-secondary btn-sm">Test</button>
        </div>
      </>
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

// const test2 = ReactDOM.createRoot(document.getElementById("test2"));

//test1.render(<Game />);

//test2.render(<Home />);
// test2.render(<Account />);
// test2.render(<History />);
// test2.render(<Transfer />);
// test2.render(<Register />);

/*
  Index.tsx is the main entry point of your website
  Anything here is what will be displayed

  Since React is SPA, this is going to the main HTML page
*/

//React selects the div with an id of root in index.html
//And it will display your components there

//On the main landing page we have 2 columns
//column 1 is the login component
const test1 = ReactDOM.createRoot(document.getElementById("test1") as HTMLElement);
test1.render(<Login />);

//column 2 will hold the component corresponding to the link clicked on the nav bar
const root = ReactDOM.createRoot(document.getElementById('test2') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider store={store} />
      {/* BrowserRouter starts the routing, this is what will switch between components */}
      <BrowserRouter>
          {/* Routes will hold many Route components that has its own path and component to display */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/history" element={<History />}></Route>
            <Route path="/transfer" element={<Transfer />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        <div>Footer</div>
      </BrowserRouter>
      </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();