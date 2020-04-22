import React, { Component } from 'react';
import Header from '../GeneralComponents/Header';
import Footer from '../GeneralComponents/Footer';
import TestForm from './test';

export default class ProvaPage extends Component {

    render() {
      
        return (
          <div>
            <Header />
            <TestForm />
            <Footer />
          </div>
        );
    }
}
