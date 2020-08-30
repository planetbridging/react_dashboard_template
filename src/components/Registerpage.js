import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Registerpage extends Component {
  render() {
    return (
      <div className="App">
        <div class="card text-center p-3">
          <div class="card-body">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="registerInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="registerInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
