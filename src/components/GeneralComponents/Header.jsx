import React, {Component} from 'react';
import './styles.css';
import { Link } from "react-router-dom";

export default class Header1 extends Component {
    render() {
        return(
            <div position="static" className="header1">  
    
                <Link to="/"> 
                    <img src={require("../img/itennis.png")} alt="web_logo" className="header-logo" /> 
                </Link>
        
                <a className="header-login arial">Login</a>
            </div>
        );
    }
}
