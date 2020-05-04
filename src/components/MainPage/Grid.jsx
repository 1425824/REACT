import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import { Link } from "react-router-dom";

export default class Grid1 extends Component{

    render(){
    return (

    <div position="static" className="grid1" >
      <Grid  section="exercise" >
        <div className="card" >
          <p className="card_title arial"  >
            Consulta exercicis
          </p>
          <img className="logo-box" alt="ex_icon" src={require("../img/ej icon.png")}/>
          <p className="card_text arial"  >
            Consulta el banc d'exercicis. Jocs i exercicis per a totes les edats i nivells.
          </p>
          <button className="card_button arial" >
            <Link style={{ color:'inherit', textDecoration:'inherit'}} to="/exercises">Exercicis</Link>
          </button>
        </div>
      </Grid>

        <Grid section="reports" >
        <div className="card">
          <p className="card_title arial"  >
            Generar informes
          </p>
          <img className="logo-box" alt="reports_icon" src={require("../img/informes.png")}/>
          <p className="card_text arial"  >
            Selecciona exercicis i confecciona el teu propi pla d'entrenament. (Descarregable en format PDF)
          </p>
          
          <button  className="card_button arial" > 
            <Link style={{ color:'inherit', textDecoration:'inherit'}} to="/report">Nou informe</Link>
          </button>
           
        </div>
        </Grid>

        <Grid section="paint" >
        <div className="card">
          <p className="card_title arial"  >
            Mode pissarra
          </p>
          <img className="logo-box" alt="draw_icon" src={require("../img/draw.png")}/>
          <p className="card_text arial"  >
            Complementa les explicacions tècniques i tàctiques amb aquesta eina de dibuix.
          </p>

          <button className="card_button arial"  > 
          <Link style={{ color:'inherit', textDecoration:'inherit'}} to="/draw">Pissarra</Link>
          </button>
        </div>
        </Grid>

        <Grid section="config" >
        <div className="card">
          <p className="card_title arial"  >
            Proves de nivell
          </p>
          <img className="logo-box" alt="config_icon" src={require("../img/test.png")}/>
          <p className="card_text arial"  >
            Comprova el teu nivell en pista realitzant les proves de nivell oficials de la Federació Catalana de Tennis (FCT).
          </p>
          <button className="card_button arial"  > 
          <Link style={{ color:'inherit', textDecoration:'inherit'}} to="/prova">Fer prova</Link>
          </button>
        </div>
        </Grid>
    </div>
  
    );

  }

}

