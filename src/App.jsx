import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.svg";
// img src={logo} className="App-logo" alt="logo"
import { Link } from "react-router-dom";
import AppRouter from "./components/router/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link className="App-link" to="/about">
              to about page
            </Link>
          </nav>
        </header>
        <main className="App-main">
          <AppRouter />
        </main>
        <footer className="App-footer">
          <Link className="App-link" to="/">
            to main page
          </Link>
        </footer>
      </div>
    );
  }
}

export default App;
