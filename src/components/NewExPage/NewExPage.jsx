import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import NewExForm from './NewExForm';
import Footer from  '../GeneralComponents/Footer';


export default class newExPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <NewExForm />
            <Footer />
        </div>
        );
    }
}