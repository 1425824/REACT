import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ReportPage from './components/ReportPage/ReportPage';
import DrawPage from './components/DrawPage/DrawPage';
import ExPage from './components/ExPage/ExPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import NewExPage from './components/NewExPage/NewExPage';
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

      <Route exact path="/welcome">
          <WelcomePage/>
      </Route>

      <Route exact path="/register">
          <RegisterPage/>
      </Route>

        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route exact path="/exercises" >
        <ExPage />
        </Route>

        <Route exact path="/exercises/new" >
        <NewExPage/>
        </Route>

        <Route exact path="/report" >
        <ReportPage />
        </Route>

        <Route exact path="/draw" >
        <DrawPage />
        </Route>



      </Switch>
      </div>
    </Router>
  );
}


