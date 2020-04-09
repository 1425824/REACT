import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

export default class CarouselWelcome extends Component {


    render() {
        return (
            <Carousel emulateTouch showStatus={false} showThumbs={false} >
                <div className="carousel-cont">
                    <img alt="car1" src={require("../img/car1.png")} />

                    <div className="carousel-card" >
                        <p className="carousel-title"> Consulta tot tipus d'exercicis per millorar els teus entrenaments</p>
                        <p className="carousel-text" >Accés a un repositori d'exercicis i jocs a l'instant</p>
                        <a className="carousel-button" >
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/register">Registra't</Link>
                        </a>
                    </div>

                </div>

                <div  >
                    <img alt="car2" src={require("../img/car2.png")} />

                    <div className="carousel-card" >
                        <p className="carousel-title" >Genera informes personalitzats i planifica entrenaments a mida</p>
                        <p className="carousel-text" >Planifica les sessions d'entrenament de forma ràpida. Comparteix els informes creats amb altres usuaris</p>

                        <a className="carousel-button" >
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/register">Registra't</Link>
                        </a>
                    </div>
                </div>

                <div>
                    <img alt="car3" src={require("../img/car3.png")} />
                    <div className="carousel-card">
                        <p className="carousel-title" >Utilitza el mode pissarra per treballar l'estratègia a peu de pista</p>
                        <p className="carousel-text" >Plasma situacions reals de joc i millora la presa de decisions tàctiques en pista</p>
                        <a className="carousel-button" >
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/register">Registra't</Link>
                        </a>
                    </div>
                </div>

            </Carousel>
        );
    }
}