import React, {Component} from 'react';
import './styles.css';
import { Link } from "react-router-dom";

export default class Header1 extends Component {
    render() {
        return(
            <div position="static" className="header1">  
    
                <Link to="/dashboard"> 
                    <img src={require("../img/itennis.png")} alt="web_logo" className="header-logo" /> 
                </Link>
                <Link to="/dashboard" className="login-link" >
                   
                    <a className="header-dash arial">Dashboard</a>
                </Link>

                
                <Link to="/login" className="login-link" >
                    <a className="header-login arial">Login</a>
                </Link>
            </div>
        );
    }
}
