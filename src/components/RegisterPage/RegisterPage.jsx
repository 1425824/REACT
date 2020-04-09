import React, { Component} from 'react';
import Header from '../GeneralComponents/Header';
import RegisterForm from '../RegisterPage/RegisterForm';
import Footer from  '../GeneralComponents/Footer';


export default class RegisterPage extends Component {
    render() {
        return (
        <div>
            <Header />
            <RegisterForm />
            <Footer />
        </div>
        );
    }
}