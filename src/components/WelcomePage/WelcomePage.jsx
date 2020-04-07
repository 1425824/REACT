import React, { Component } from 'react';
import Header from '../GeneralComponents/Header';
import CarouselWelcome from './Carousel';
import Footer from '../GeneralComponents/Footer';


export default class WelcomePage extends Component {

    render() {
      
        return (
          <div>
            <Header />
            <CarouselWelcome className="carousel" />
            <Footer />
          </div>
        );
    }
}
