import React, { Component } from "react";
import CanvasDraw from 'react-canvas-draw';

import './canvas.css'

const bgs = [require("../img/pissarra1.jpg"), require("../img/pissarra2.jpg"), require("../img/pissarra3.jpg")];

export default class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#ff0000",
      brushRadius: 5,
      lazyRadius: 1,
      imgSrc: 0,

    };
  }

  render() {
    return (
          <div>
          <div className="canvas-btns">

            <button className="canvas-actions"
              onClick={() => {
                if(this.state.imgSrc === 0)
                  this.saveableCanvas1.clear();
                else if(this.state.imgSrc === 1)
                  this.saveableCanvas2.clear();
                else
                  this.saveableCanvas3.clear();
              }}
            > Esborra
            </button>


            <button className="canvas-actions"
              onClick={() => {
                if(this.state.imgSrc === 0){
                  this.saveableCanvas1.undo();
                }
                else if(this.state.imgSrc === 1){
                  this.saveableCanvas2.undo();
                }
                else {
                  this.saveableCanvas3.undo();
                }
              }}
            >
            Pas enrere
            </button>

          <div>
            <label>Mida-Pinzell:</label>
            <input type="number" value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })} />
          </div>
      </div>

     

      <div className="canvas-container">
        
        {this.state.imgSrc === 0 &&
          <div>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas1 = canvasDraw)}
              brushColor={this.props.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={1} imgSrc={bgs[0]}
              canvasHeight={450} canvasWidth={800}
            />
          </div>
        }
        {this.state.imgSrc === 1 &&
          <div>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas2 = canvasDraw)}
              brushColor={this.props.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={1} imgSrc={bgs[1]}
              canvasHeight={450} canvasWidth={800}
            />

          </div>
        }

        {this.state.imgSrc === 2 &&
          <div>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas3 = canvasDraw)}
              brushColor={this.props.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={1} imgSrc={bgs[2]}
              canvasHeight={450} canvasWidth={800}
            />
          </div>
        }


        <div>
          <button onClick={() => { this.setState({ imgSrc: 0 }) }}>
            <img alt="bg1" className="change_background" src={bgs[0]}
            />
          </button>

          <button onClick={() => { this.setState({ imgSrc: 1 }) }}>
            <img alt="bg2" className="change_background" src={bgs[1]}
            />
          </button>

          <button onClick={() => { this.setState({ imgSrc: 2 }) }}>
            <img alt="bg3" className="change_background" src={bgs[2]} />
          </button>

        </div>

      </div>
      </div>
    );
  }
}