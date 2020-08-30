import React, { AsyncStorage, Component, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

//pages

/*
<nav>
          <ul>
            <li>
              <Link to="/login">login</Link>
              <Link to="/dashboard">dashy</Link>
            </li>
          </ul>
        </nav>
*/

import { Loginpage } from "./components/Loginpage";
import { Registerpage } from "./components/Registerpage";
import { dashboard } from "./dashboard/dashboard";

//import $ from 'jquery';
//const authenticated = localStorage.getItem("token");

function App() {
  const [authenticated, setAuthenticaed] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  //const history = createBrowserHistory();
  function handleSuccessful({ data, ...props }) {
    setAuthenticaed({
      authenticated: true,
    });
    //return <Redirect to="/dashboard" />;
    //props.history.push("/dashboard");
    //return <Redirect to="/dashboard" push={true} />;
    //history.push("/");
    //return <Link to="/" />;
  }
  function LoginForm({ authenticated, ...props }) {
    const location = useLocation();
    const { pathname } = location;

    handleSuccessful = handleSuccessful.bind(this);

    return authenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <div class="card text-center bg-dark p-3">
        <img
          class="card-img-top"
          src="../imgs/logo-displayx200.png"
          alt="Logo"
        />
        <div class="card-body">
          <div class="card text-white bg-dark mb-3">
            <Loginpage
              {...props}
              authenticated={authenticated}
              handleSuccessful={handleSuccessful}
            />
            <div class="card-footer mb-3">
              <button
                type="submit"
                onClick={handleShow}
                class="btn btn-primary btn-block"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ProtectedRoute({ authenticated, ...props }) {
    return authenticated ? <Route {...props} /> : <Redirect to="/login" />;
  }

  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          class="bg-dark text-white"
        >
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Registerpage />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>

        <Switch>
          <Route
            exact
            render={(props) => (
              <header className="App-header">
                <LoginForm {...props} authenticated={authenticated} />
              </header>
            )}
            path="/login"
          />
          <ProtectedRoute
            exact
            authenticated={authenticated}
            path="/dashboard"
            component={dashboard}
          ></ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
