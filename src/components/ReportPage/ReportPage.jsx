import React, { Component } from 'react';
import Header from '../GeneralComponents/Header';
import MultiSelect from './Multiselect';
import Footer from '../GeneralComponents/Footer';


export default class ReportPage extends Component {

    render() {
      //console.log(items);
        return (
          <div>
            <Header />
            <MultiSelect />
            <Footer />
          </div>
        );
    }
}


