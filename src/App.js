import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import HeaderList from './HeaderList';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkbox } from '@material-ui/core';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">     {/* Login */}
            <Login />
          </Route>

          <Route path="/Checkout">  {/* Checkout */}
            <Header />
            <HeaderList />
            <Checkout />
          </Route>

          <Route path="/">          {/* Home */}
            <Header />
            <HeaderList />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
