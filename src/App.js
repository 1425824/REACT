import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import ReportPage from './components/ReportPage/ReportPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/report" >
        <ReportPage />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}


