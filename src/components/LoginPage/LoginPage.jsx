import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import LoginForm from './LoginForm';
import Footer from  '../GeneralComponents/Footer';


export default class LoginPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
        );
    }
}