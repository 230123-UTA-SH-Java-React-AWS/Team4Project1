"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
//import App from './App';
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("./store");
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
class Login extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-sm-5" },
                react_1.default.createElement("label", null, "Login"),
                react_1.default.createElement("input", { type: "text", className: "form-control", placeholder: "Email", "aria-label": "Login" }),
                react_1.default.createElement("label", null, "Password"),
                react_1.default.createElement("input", { type: "text", className: "form-control", placeholder: "", "aria-label": "Password" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "button", className: "btn btn-secondary btn-sm", value: "Login" }))));
    }
}
class Home extends react_1.default.Component {
    testButton() {
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("a", null, "Home")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "submit", className: "btn btn-secondary btn-sm" }, "Test"))));
    }
}
class Account extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("a", null, "Account Info")));
    }
}
class History extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("a", null, "Transaction History")));
    }
}
class Transfer extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("a", null, "Transfer")));
    }
}
class Register extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("a", null, "Register")));
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
const test1 = client_1.default.createRoot(document.getElementById("test1"));
test1.render(react_1.default.createElement(Login, null));
//column 2 will hold the component corresponding to the link clicked on the nav bar
const root = client_1.default.createRoot(document.getElementById('test2'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(react_router_dom_1.RouterProvider, { store: store_1.store }),
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/account", element: react_1.default.createElement(Account, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/history", element: react_1.default.createElement(History, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/transfer", element: react_1.default.createElement(Transfer, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/register", element: react_1.default.createElement(Register, null) })),
        react_1.default.createElement("div", null, "Footer"))), react_1.default.StrictMode >
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
