import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

export class Loginpage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.authenticated);
    this.state = {
      txtUsername: "poo@gmail.com",
      txtPassword: "po",
      txtStatus: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      txtUsername: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      txtPassword: event.target.value,
    });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.txtUsername);
    event.preventDefault();
    if (
      this.state.txtUsername == "poo@gmail.com" &&
      this.state.txtPassword == "poo"
    ) {
      this.state.txtStatus = "Success";
      localStorage.setItem("token", "jeberish");
      this.props.handleSuccessful(true);
      //this.props.authenticated;
    } else {
      this.state.txtStatus = "Failed";
    }
    ReactDOM.render(this.state.txtStatus, document.getElementById("txtStatus"));
  }

  render() {
    return (
      <div className="App">
        <div class="card-body">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="loginInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.txtUsername}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="loginInputPassword1"
                placeholder="Password"
                value={this.state.txtPassword}
                onChange={this.handlePasswordChange}
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Login
            </button>
            <p id="txtStatus"></p>
          </form>
        </div>
      </div>
    );
  }
}
