
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';

function App() {
  return (
    <>
      <Router>
     <Header/>

        <Switch>
          <Route exact path="/" component={HomePages}>
           
          </Route>
         
        </Switch>
     
    </Router>
    </>
  );
}

export default App;
