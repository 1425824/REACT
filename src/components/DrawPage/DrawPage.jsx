import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import Footer from  '../GeneralComponents/Footer';
import ColorPicker from './ColorPicker';


export default class DrawPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <ColorPicker />
            <Footer />
        </div>
        );
    }
}

