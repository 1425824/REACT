import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import Grid from './Grid';
import Footer from  '../GeneralComponents/Footer';


export default class MainPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <Grid />
            <Footer />
        </div>
        );
    }
}



