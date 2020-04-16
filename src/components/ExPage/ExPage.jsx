import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import Footer from  '../GeneralComponents/Footer';
import { Link } from "react-router-dom";


export default class ExPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <a >
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/exercises/new">Nou Exercici</Link>
            </a>

            <Footer />
        </div>
        );
    }
}
