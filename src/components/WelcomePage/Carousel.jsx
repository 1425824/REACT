import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class CarouselWelcome extends Component {


    render() {
        return (
            <Carousel emulateTouch showStatus={false} showThumbs={false} >
                <div  className="carousel-cont">
                    <img  alt="car1" src={require("../img/car1.png")} />
                    
                    <div  className="carousel-card" >
                    <p className="carousel-title"> Consulta tot tipus d'exercicis per millorar els teus entrenaments</p>
                    <p>    </p>
                        <button>Registra't</button>
                    </div>
                   
                </div>

                <div  >
                    <img alt="car2" src={require("../img/car2.png")} />

                    <div className="carousel-card" > 
                    <p className="carousel-title" >Genera informes personalitzats i planifica sessions d'entrenament a mida</p>
                    <p>   </p>
                    <button>Registra't</button>
                    </div>
                </div>

                <div>
                    <img alt="car3" src={require("../img/car3.png")}/>
                    <div className="carousel-card">
                    <p className="carousel-title" >Utilitza el mode pissarra per treballar l'estratègia a peu de pista</p>
                    <p>   </p>
                    <button>Registra't</button>
                    </div>
                </div>
                
            </Carousel>
        );
    }
}