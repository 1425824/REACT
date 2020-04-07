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
            lorem ipsum bla bla bla lorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla bla
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
            lorem ipsum bla bla bla lorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla bla
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
            lorem ipsum bla bla bla lorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla bla
          </p>

          <button className="card_button arial"  > 
          <Link style={{ color:'inherit', textDecoration:'inherit'}} to="/draw">Pissarra</Link>
          </button>
        </div>
        </Grid>

        <Grid section="config" >
        <div className="card">
          <p className="card_title arial"  >
            Configuració
          </p>
          <img className="logo-box" alt="config_icon" src={require("../img/config.png")}/>
          <p className="card_text arial"  >
            lorem ipsum bla bla bla lorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla blalorem ipsum bla bla bla
          </p>
          <button className="card_button arial" align="center" >Configuració</button>
        </div>
        </Grid>
    </div>
  
    );

  }

}

